import React, { useState, useEffect, useSelector, useRef } from 'react';
import Video from 'twilio-video';
import api from '../../services/api';

export default function VideoComponent() {
  const [identity, setIdentity] = useState(null);
  const [roomName, setRoomName] = useState('oi');
  const [roomNameErr, setroomNameErr] = useState(false);
  const [previewTracks, setPreviewTracks] = useState(null);
  const [localMediaAvailable, setlocalMediaAvailable] = useState(true);
  const [hasJoinedRoom, setHasJoinedRoom] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
  const [token, setToken] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzJiOTJlYTc5YTc2MmZhMzhiMTI4NTA3NzU3NzE0NTc4LTE1ODg1Mzc2MTYiLCJncmFudHMiOnsiaWRlbnRpdHkiOiJvaSIsInZpZGVvIjp7fX0sImlhdCI6MTU4ODUzNzYxNiwiZXhwIjoxNTg4NTQxMjE2LCJpc3MiOiJTSzJiOTJlYTc5YTc2MmZhMzhiMTI4NTA3NzU3NzE0NTc4Iiwic3ViIjoiQUNkN2ZiMmIzMGMwZThhMWJiYWViNDc2MWZkMjI1MmZlOSJ9.U2vHSNlZMCZbgaNPvNggWn9ap3ledjfOAgyX7OmZDhs'
  );

  // const profile = useSelector(state => state.user.profile.name);

  // Attach the Tracks to the DOM.
  function attachTracks(tracks, container) {
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }

  // Attach the Participant's Tracks to the DOM.
  function attachParticipantTracks(participant, container) {
    function getTracks(participant) {
      return Array.from(participant.tracks.values())
        .filter(function(publication) {
          return publication.track;
        })
        .map(function(publication) {
          return publication.track;
        });
    }
    const tracks = getTracks(participant);
    // var tracks = Array.from(participant.tracks.values());
    this.attachTracks(tracks, container);
  }

  function detachTracks(tracks) {
    tracks.forEach(track => {
      track.detach().forEach(detachedElement => {
        detachedElement.remove();
      });
    });
  }

  function detachParticipantTracks(participant) {
    function getTracks(participant) {
      return Array.from(participant.tracks.values())
        .filter(function(publication) {
          return publication.track;
        })
        .map(function(publication) {
          return publication.track;
        });
    }
    const tracks = getTracks(participant);
    // var tracks = Array.from(participant.tracks.values());
    detachTracks(tracks);
  }

  function handleRoomNameChange(e) {
    /* Fetch room name from text field and update state */
    setRoomName(e.target.value);
  }

  function joinRoom() {
    /*
    Show an error message on room name text field if user tries         joining a room without providing a room name. This is enabled by setting `roomNameErr` to true
      */
    if (!roomName.trim()) {
      setroomNameErr(true);
      return;
    }

    console.log(`Joining room '${roomName}'...`);
    const connectOptions = {
      name: roomName,
    };

    if (previewTracks) {
      connectOptions.tracks = previewTracks;
    }

    /*
    Connect to a room by providing the token and connection    options that include the room name and tracks. We also show an alert if an error occurs while connecting to the room.
    */

    Video.connect(token, connectOptions).then(roomJoined, error => {
      alert(`Could not connect to Twilio: ${error.message}`);
    });
  }

  function participantConnected(participant, container) {
    // Set up the Participant's media container.
    // setupParticipantContainer(participant, room);

    // Handle the TrackPublications already published by the Participant.
    participant.tracks.forEach(publication => {
      trackPublished(publication, participant, container);
    });

    // Handle theTrackPublications that will be published by the Participant later.
    participant.on('trackPublished', publication => {
      trackPublished(publication, participant, container);
    });
  }

  function trackPublished(publication, participant, container) {
    // If the TrackPublication is already subscribed to, then attach the Track to the DOM.
    if (publication.track) {
      attachTrack(publication.track, participant, container);
    }

    // Once the TrackPublication is subscribed to, attach the Track to the DOM.
    publication.on('subscribed', track => {
      attachTrack(track, participant, container);
    });

    // Once the TrackPublication is unsubscribed from, detach the Track from the DOM.
    publication.on('unsubscribed', track => {
      detachTrack(track, participant, container);
    });
  }

  function attachTrack(track, participant, container) {
    container.appendChild(track.attach());
  }

  function detachTrack(track, participant, container) {
    track.detach().forEach(detachedElement => {
      detachedElement.remove();
    });
  }

  function roomJoined(room) {
    // Called when a participant joins a room
    console.log(`Joined as '${identity}'`);
    setActiveRoom(room);
    setlocalMediaAvailable(true);
    setHasJoinedRoom(true);

    // Attach LocalParticipant's tracks to the DOM, if not already attached.
    const previewContainer = this.refs.localMedia;

    // -- attach local participant

    if (!previewContainer.querySelector('video')) {
      attachParticipantTracks(room.localParticipant, previewContainer);
    }

    // Attach the Tracks of the room's participants.
    room.participants.forEach(participant => {
      console.log(`Already in Room: '${participant.identity}'`);
      const previewContainer = this.refs.remoteMedia;
      // this.attachParticipantTracks(participant, previewContainer);
      this.participantConnected(participant, previewContainer);
    });

    // Participant joining room
    room.on('participantConnected', participant => {
      console.log(`Joining: '${participant.identity}'`);
      const previewContainer = this.refs.remoteMedia;
      // this.attachParticipantTracks(participant, previewContainer);
      this.participantConnected(participant, previewContainer);
    });

    room.on('participantDisconnected', participant => {
      console.log(`Participant '${participant.identity}' left the room`);
      this.detachParticipantTracks(participant);
    });

    room.on('disconnected', () => {
      if (this.state.previewTracks) {
        this.state.previewTracks.forEach(track => {
          track.stop();
        });
      }
      this.detachParticipantTracks(room.localParticipant);
      room.participants.forEach(this.detachParticipantTracks);
      setActiveRoom(null);
      setHasJoinedRoom(false);
      setlocalMediaAvailable(false);
    });

    // ... more event listeners
  }

  function leaveRoom() {
    activeRoom.disconnect();
    setHasJoinedRoom(false);
    setlocalMediaAvailable(false);
  }

  useEffect(() => {
    async function postToken() {
      const response = await api.post('/token', {
        identity: 'profile',
      });
      console.log(response);
      setIdentity(response.data.identity);
      setToken(response.data.token);
    }
    // postToken();
    joinRoom();
  }, [joinRoom]);

  return (
    <>
      <Container>
        <div className="flex-item">
          <div ref="localMedia" id="remote-media" />
        </div>
      </Container>
    </>
  );
}

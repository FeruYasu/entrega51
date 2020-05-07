import React, { Component } from 'react';
import Video from 'twilio-video';
// import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import api from '../../services/api';
import { Container, VideoContainer } from './styles';

export default class VideoComponent3 extends Component {
  constructor(props) {
    super();
    this.state = {
      identity:
        props.identity /* Will hold the fake name assigned to the client. The name is generated by faker on the server */,
      roomName: props.roomName /* Will store the room name */,
      roomNameErr: false /* Track error for room name TextField. This will    enable us to show an error message when this variable is true */,
      previewTracks: null,
      localMediaAvailable: true /* Represents the availability of a LocalAudioTrack(microphone) and a LocalVideoTrack(camera) */,
      hasJoinedRoom: false,
      activeRoom: null, // Track the current active room
      token: '',
    };

    console.log(props);
    this.joinRoom = this.joinRoom.bind(this);
    this.handleRoomNameChange = this.handleRoomNameChange.bind(this);
    this.leaveRoom = this.leaveRoom.bind(this);
    this.detachTracks = this.detachTracks.bind(this);
    this.detachParticipantTracks = this.detachParticipantTracks.bind(this);
    this.roomJoined = this.roomJoined.bind(this);
  }

  componentDidMount() {
    api.post('/token', { identity: this.state.identity }).then(results => {
      /*
      Make an API call to get the token and identity(fake name) and  update the corresponding state variables.
          */
      const { identity, token } = results.data;
      this.setState({ identity });
      this.setState({ token });
      this.joinRoom();
    });
  }

  // Attach the Tracks to the DOM.
  attachTracks(tracks, container) {
    tracks.forEach(track => {
      container.appendChild(track.attach());
    });
  }

  // Attach the Participant's Tracks to the DOM.
  attachParticipantTracks(participant, container) {
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
  /*
    attachParticipantTracks(participant, container) {
        function getTracks(participant) {
            return Array.from(participant.tracks.values()).filter(function (publication) {
                return publication.track;
            }).map(function (publication) {
                return publication.track;
            });
        }

        function getTracksTest(participant) {
            return Array.from(participant.tracks.values()).filter(function (publication) {
                return publication._track;
            }).map(function (publication) {
                return publication._track;
            });
        }

        var trackTest = getTracksTest(participant);
        var tracks = getTracks(participant);
        console.log(tracks);
        if(tracks){
            this.attachTracks(tracks, container);
        }
        if(trackTest){
           this.attachTracks(trackTest, container);
        }

    }
    */

  detachTracks(tracks) {
    tracks.forEach(track => {
      track.detach().forEach(detachedElement => {
        detachedElement.remove();
      });
    });
  }

  detachParticipantTracks(participant) {
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
    this.detachTracks(tracks);
  }

  handleRoomNameChange(e) {
    /* Fetch room name from text field and update state */
    const roomName = e.target.value;
    this.setState({ roomName });
  }

  joinRoom() {
    /*
    Show an error message on room name text field if user tries         joining a room without providing a room name. This is enabled by setting `roomNameErr` to true
      */
    if (!this.state.roomName.trim()) {
      this.setState({ roomNameErr: true });
      return;
    }

    console.log(`Joining room '${this.state.roomName}'...`);

    const connectOptions = {
      name: this.state.roomName,
      // audio: false,
      // video: false,
    };
    console.log(connectOptions);

    if (this.state.previewTracks) {
      connectOptions.tracks = this.state.previewTracks;
    }
    console.log(connectOptions);

    /*
    Connect to a room by providing the token and connection    options that include the room name and tracks. We also show an alert if an error occurs while connecting to the room.
    */
    Video.connect(this.state.token, connectOptions).then(
      this.roomJoined,
      error => {
        alert(`Could not connect to Twilio: ${error.message}`);
      }
    );
  }

  participantConnected(participant, container) {
    // Set up the Participant's media container.
    // setupParticipantContainer(participant, room);

    // Handle the TrackPublications already published by the Participant.
    participant.tracks.forEach(publication => {
      this.trackPublished(publication, participant, container);
    });

    // Handle theTrackPublications that will be published by the Participant later.
    participant.on('trackPublished', publication => {
      this.trackPublished(publication, participant, container);
    });
  }

  trackPublished(publication, participant, container) {
    // If the TrackPublication is already subscribed to, then attach the Track to the DOM.
    if (publication.track) {
      this.attachTrack(publication.track, participant, container);
    }

    // Once the TrackPublication is subscribed to, attach the Track to the DOM.
    publication.on('subscribed', track => {
      this.attachTrack(track, participant, container);
    });

    // Once the TrackPublication is unsubscribed from, detach the Track from the DOM.
    publication.on('unsubscribed', track => {
      this.detachTrack(track, participant, container);
    });
  }

  attachTrack(track, participant, container) {
    container.appendChild(track.attach());
    /*
        // Attach the Participant's Track to the thumbnail.
        const $media = $(`div#${participant.sid} > ${track.kind}`, $participants);
        $media.css('opacity', '');
        track.attach($media.get(0));

        // If the attached Track is a VideoTrack that is published by the active
        // Participant, then attach it to the main video as well.
        if (track.kind === 'video' && participant === activeParticipant) {
          track.attach($activeVideo.get(0));
          $activeVideo.css('opacity', '');
        }
        */
  }

  detachTrack(track, participant, container) {
    track.detach().forEach(detachedElement => {
      detachedElement.remove();
    });
    /*
        // Detach the Participant's Track from the thumbnail.
        const $media = $(`div#${participant.sid} > ${track.kind}`, $participants);
        $media.css('opacity', '0');
        track.detach($media.get(0));

        // If the detached Track is a VideoTrack that is published by the active
        // Participant, then detach it from the main video as well.
        if (track.kind === 'video' && participant === activeParticipant) {
          track.detach($activeVideo.get(0));
          $activeVideo.css('opacity', '0');
        }
        */
  }

  // https://github.com/twilio/video-quickstart-js/blob/5981a29a01315e073eafe9f1bdf37ca1e5b9ffb0/quickstart/src/joinroom.js#L123

  roomJoined(room) {
    // Called when a participant joins a room
    console.log(`Joined as '${this.state.identity}'`);
    this.setState({
      activeRoom: room,
      localMediaAvailable: true,
      hasJoinedRoom: true, // Removes ‘Join Room’ button and shows ‘Leave Room’
    });

    // Attach LocalParticipant's tracks to the DOM, if not already attached.
    const previewContainer = this.refs.localMedia;

    // -- attach local participant
    if (!previewContainer.querySelector('video')) {
      this.attachParticipantTracks(room.localParticipant, previewContainer);
    }

    // Attach the Tracks of the room's participants.
    room.participants.forEach(participant => {
      console.log(`Already in Room: '${participant.identity}'`);
      const previewContainer = this.refs.localMedia;
      // this.attachParticipantTracks(participant, previewContainer);
      this.participantConnected(participant, previewContainer);
    });

    // Participant joining room
    room.on('participantConnected', participant => {
      console.log(`Joining: '${participant.identity}'`);
      const previewContainer = this.refs.localMedia;
      // this.attachParticipantTracks(participant, previewContainer);
      this.participantConnected(participant, previewContainer);
    });

    /*
        // Attach participant’s tracks to DOM when they add a track
        room.on('trackAdded', (track, participant) => {
            console.log(participant.identity + ' added track: ' + track.kind);
            var previewContainer = this.refs.remoteMedia;
            this.attachTracks([track], previewContainer);
        });

        // Detach participant’s track from DOM when they remove a track.
        room.on('trackRemoved', (track, participant) => {
            this.log(participant.identity + ' removed track: ' + track.kind);
            this.detachTracks([track]);
        });
        */

    // Detach all participant’s track when they leave a room.
    room.on('participantDisconnected', participant => {
      console.log(`Participant '${participant.identity}' left the room`);
      this.detachParticipantTracks(participant);
    });

    // Once the local participant leaves the room, detach the Tracks
    // of all other participants, including that of the LocalParticipant.
    room.on('disconnected', () => {
      if (this.state.previewTracks) {
        this.state.previewTracks.forEach(track => {
          track.stop();
        });
      }
      this.detachParticipantTracks(room.localParticipant);
      room.participants.forEach(this.detachParticipantTracks);
      this.state.activeRoom = null;
      this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
    });

    // ... more event listeners
  }

  leaveRoom() {
    this.state.activeRoom.disconnect();
    this.setState({ hasJoinedRoom: false, localMediaAvailable: false });
  }

  render() {
    /*
   Controls showing of the local track
   Only show video track after user has joined a room else show nothing
  */
    const showLocalTrack = this.state.localMediaAvailable ? (
      <div className="flex-item">
        <div ref="localMedia" />{' '}
      </div>
    ) : (
      ''
    );
    /*
   Controls showing of ‘Join Room’ or ‘Leave Room’ button.
   Hide 'Join Room' button if user has already joined a room otherwise
   show `Leave Room` button.
  */
    const joinOrLeaveRoomButton = this.state.hasJoinedRoom ? (
      <RaisedButton label="Leave Room" secondary onClick={this.leaveRoom} />
    ) : (
      <RaisedButton label="Join Room" primary onClick={this.joinRoom} />
    );
    return (
      <Container>
        <div className="flex-item">
          <div ref="localMedia" />
        </div>
        <div className="flex-item">
          <div ref="remoteMedia" />
        </div>
      </Container>
    );
  }
}
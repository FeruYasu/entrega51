import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdThumbUp, MdDone } from 'react-icons/md';
import api from '~/services/api';
import VideoComponent from '../../components/VideoComponent';
import thumbsup from '~/assets/belezinha.png';
import heart from '~/assets/heart.png';
import laugh from '~/assets/laugh.png';
import palmas from '~/assets/palmas.png';
import ChatComponent from '../../components/ChatComponent';

import {
  Container,
  Content,
  LeftSide,
  RightSide,
  PerguntasTitle,
  ReactionsContainer,
  Emoji,
  Bottom,
  ChatContainer,
} from './styles';

export default function Stand(props) {
  const profile = useSelector(state => state.user.profile);
  const roomCode = props.match.params.id;

  return (
    <Container>
      <header>
        <p>
          <strong>
            Stand
            <br />
          </strong>
        </p>
      </header>

      <Content>
        <LeftSide>
          <VideoComponent master roomName={roomCode} identity={profile.name} />
          <Bottom>
            <ReactionsContainer>
              <Emoji>
                <img src={thumbsup} alt="" />
              </Emoji>
              <Emoji>
                <img src={heart} alt="" />
              </Emoji>
              <Emoji>
                <img src={laugh} alt="" />
              </Emoji>
              <Emoji>
                <img src={palmas} alt="" />
              </Emoji>
            </ReactionsContainer>
          </Bottom>
        </LeftSide>
        <RightSide>
          <PerguntasTitle>Chat</PerguntasTitle>
          <ChatContainer>
            <ChatComponent userName={profile.name} chatName={roomCode} />
          </ChatContainer>
        </RightSide>
      </Content>
    </Container>
  );
}

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdThumbUp, MdDone } from 'react-icons/md';
import api from '~/services/api';
import VideoComponent3 from '../../components/VideoComponent3';
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

export default function CoffeeRoom(props) {
  const profile = useSelector(state => state.user.profile);

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
          <VideoComponent3 master roomName="3496" identity={profile.name} />
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
            <ChatComponent userName={profile.name} chatName="3496" />
          </ChatContainer>
        </RightSide>
      </Content>
    </Container>
  );
}

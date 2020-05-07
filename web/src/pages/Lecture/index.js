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

import {
  Container,
  Likes,
  TitleContainer,
  QuestionContainer,
  Question,
  RightContainer,
  Content,
  LeftSide,
  RightSide,
  Scroll,
  PerguntasTitle,
  ReactionsContainer,
  Emoji,
  Bottom,
} from './styles';

export default function Lecture(props) {
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState(['']);
  const [video, setVideo] = useState(false);
  const profile = useSelector(state => state.user.profile);
  const roomCode = props.match.params.id;

  useEffect(() => {
    async function loadQuestions() {
      const response = await api.get(`/questions/${roomCode}`);

      const data = response.data.map(question => ({
        ...question,
        likedstatus: 0,
      }));

      data.sort((b, a) => a.likes - b.likes);
      setQuestions(data);
    }

    loadQuestions();
  }, [roomCode]);

  async function handleSubmit({ pergunta }) {
    await api.post(`/questions`, {
      question: pergunta,
      user_id: profile.id,
      lecture_code: roomCode,
    });
    const response = await api.get(`/questions/${roomCode}`);

    const data = response.data.map(question => ({
      ...question,
      likedstatus: 0,
    }));

    data.sort((b, a) => a.likes - b.likes);
    setQuestions(data);
    setQuestionInput('');
  }

  function handleLike(question) {
    let number = 1;
    let status = 1;

    if (question.likedstatus === 1) {
      number = -1;
      status = 0;
    }

    const newList = questions.map(obj =>
      obj.id === question.id
        ? { ...obj, likes: obj.likes + number, likedstatus: status }
        : obj
    );

    newList.sort((b, a) => a.likes - b.likes);
    setQuestions(newList);
    api.put(`/questions/${question.id}`, {
      likes: question.likes,
    });
  }

  return (
    <Container>
      <header>
        <p>
          <strong>Palestra:</strong>
          Titulo da palestra
        </p>
      </header>

      <Content>
        <LeftSide>
          <VideoComponent master roomName={roomCode} identity={profile.name} />

          <Bottom>
            <Form onSubmit={handleSubmit}>
              <h2>Envie sua pergunta:</h2>
              <Input
                name="pergunta"
                type="text"
                placeholder="Digite aqui"
                value={questionInput}
                onChange={e => setQuestionInput(e.target.value)}
              />
            </Form>
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
          <PerguntasTitle>Perguntas</PerguntasTitle>
          <ul>
            <Scroll>
              {questions.map(item => (
                <li key={item.id}>
                  <QuestionContainer>
                    <img
                      src={
                        item.user.avatar
                          ? item.user.avatar.url
                          : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                      }
                      alt=""
                    />
                    <TitleContainer>
                      <h4>{item.user.name}</h4>
                      <h5>
                        {item.user.job_positon
                          ? `${item.user.job_positon} da ${item.user.job_title}`
                          : ''}
                      </h5>
                    </TitleContainer>

                    <Question>
                      <p>{item.question}</p>
                    </Question>
                  </QuestionContainer>
                  <RightContainer>
                    {item.answered && <MdDone size={20} color="#08f26e" />}
                    <Likes onClick={() => handleLike(item)}>
                      <p>{item.likes}</p>
                      <MdThumbUp size={20} color="#999" />
                    </Likes>
                  </RightContainer>
                </li>
              ))}
            </Scroll>
          </ul>
        </RightSide>
      </Content>
    </Container>
  );
}

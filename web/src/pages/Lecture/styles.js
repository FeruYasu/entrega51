import styled from 'styled-components';
import { darken } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  max-width: 100vw;
  margin: 50px 0;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: left;
    height: 100%;
    width: 80vw;
    background: #5fa5b3;
    border-radius: 0 30px 30px 0;
  }

  strong {
    color: #fff;
    font-size: 24px;
    margin: 0 15px;
  }

  p {
    font-size: 16px;
    color: #fff;
    padding: 20px 0 20px 0;
  }

  form {
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-self: center;
    background: #1e9fd6;
    padding: 20px;
    margin-right: 20px;
    place-items: center;
    justify-content: center;

    h2 {
      color: #fff;
      margin-bottom: 20px;
    }

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999;
      margin: 0 0 10px;
      width: 100%;

      &::placeholder {
        color: #999;
      }
    }
  }

  ul {
    width: 100%;
    height: 92vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    align-self: center;
    background: #f3f3f3;
    padding: 20px;
    padding-top: 20px;
    margin-top: 20px;

    li {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid #fff;
      justify-content: space-between;
      align-items: center;
      padding: 8px 0;

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      h4 {
        color: #000;
        margin-left: 10px;
      }
      h5 {
        color: #999;
        margin-left: 10px;
      }
    }
  }
`;

export const Video = styled.div`
  width: 80vw;
  height: 500px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  background: #ccc;
  border-radius: 20px;
  align-self: center;
`;

export const Likes = styled.button`
  display: flex;
  place-items: center;
  justify-content: center;
  align-content: center;
  background: #fff;
  border-radius: 15px;
  border: none;
  height: 40px;
  width: 80px;
  transition: 0.2s;

  &:hover {
    background: ${darken(0.03, '#94EEFF')};
  }

  p {
    margin: 0;
    padding: 0;
    color: #000;
  }

  svg {
    margin-left: 10px;
  }
`;

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
`;

export const Question = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  p {
    color: #000;
    padding: 0;
    margin-right: 10px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  width: 60vw;
`;

export const RightSide = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  place-items: center;
  width: 30vw;
`;

export const Scroll = styled(PerfectScrollbar)`
  height: 100%;
  padding: 5px 15px;
`;

export const PerguntasTitle = styled.h3`
  font-size: 20px;
  background: #d1f3ff;
  margin-bottom: -40px;
  z-index: 10;
  padding: 10px;
  border-radius: 20px;
  width: 180px;
  text-align: center;
  color: #5fa5b3;
`;

export const ReactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80px;
  background: #d1f3ff;
  padding: 10px;
  border-radius: 30px;
  place-items: center;
  justify-content: space-evenly;
`;

export const Emoji = styled.button`
  background: rgba(76, 175, 80, 0);
  border: none;
  display: flex;
  place-items: center;

  img {
    height: 40px;
    width: 40px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;

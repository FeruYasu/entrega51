import styled from 'styled-components';
import { darken } from 'polished';
import banner1 from '~/assets/banner1.jpg';
import background from '~/assets/background.png';

export const Container = styled.div`
  width: 100vw;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  background-image: url('${background}');

  h1 {
    color: #5fa5b3;
    font-size: 56px;
    max-width: 30%;
    padding: 10px;
    padding-left: 50px;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 0 20px 20px 0;
    border-right: 7px solid #f7f7f7;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
    margin: auto;
    grid-gap: 2rem;
    margin-top: 100px;
    place-items: center;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      width: 30vw;
      padding: 20px;
      border-radius: 20px;
      place-items: center;
      border-bottom: 10px solid #f7f7f7;

      img {
        padding: 60px 20px;
        max-width: 80%;
        height: 25vh;
        justify-self: center;
        display: flex;
      }

      div {
        margin-top: 10px;
        color: #d9d9d9;
        display: flex;

        svg {
          margin-right: 5px;
          margin-top: 2px;
        }
      }
    }
  }
`;

export const Top = styled.div`
  display: flex;
  border: none;
  background: none;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 5vw;

  img {
    max-width: 100%;
  }
`;

export const Banner1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 55vw;
  height: 350px;
  background-image: url('${banner1}');
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
`;

export const BannerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-left: 350px;

  h4 {
    font-size: 32px;
    color: #375f67;
    margin-top: 40px;
  }
  h3 {
    font-size: 36px;
    color: #fff;
    margin-top: 20px;
  }
  p {
    font-size: 24px;
    color: #fff;
  }
`;

export const BannerButton = styled.button`
  margin-top: 20px;
  border-radius: 20px;
  border: none;
  padding: 10px;
  background: #fff;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;

  p {
    color: #5fa5b3;
    font-weight: bold;

    &:hover {
      color: ${darken(0.07, '#000')};
    }
  }

  svg {
    margin-left: 10px;
    margin-top: 2px;
  }
`;

export const LeftDown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 55vw;
`;

export const BannerDown = styled.button`
  background: ${props => (props.color === 'blue' ? '#d6f2fd' : '#e0ffe6')};
  height: 180px;
  width: 25vw;
  border-radius: 20px;
  padding: 20px;
  margin-top: 45px;
  display: flex;
  flex-direction: row;
  place-items: center;
  border: none;

  &:hover {
    background: ${props =>
      props.color === 'blue'
        ? darken(0.07, '#d6f2fd')
        : darken(0.07, '#e0ffe6')};
  }

  div {
    display: flex;
    flex-direction: column;
    max-width: 85%;
  }

  h3 {
    font-size: 30px;
    color: ${props => (props.color === 'blue' ? '#5fa5b3' : '#89b391')};
    text-align: left;
  }

  p {
    color: #a6d3df;
    font-size: 18px;
    text-align: left;
  }

  svg {
    background: #fff;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  margin-right: 5vw;
`;

export const Banner2 = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
    height: 340px;
    border-radius: 20px 20px 0 0;
  }
`;

export const BannerText2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffe5dd;
  margin: 0;
  place-items: center;
  border-radius: 0 0 20px 20px;
  padding: 20px;

  h3 {
    font-size: 56px;
    color: #70635e;
    margin-top: 20px;
    font-weight: 400;
  }
  p {
    font-size: 30px;
    font-weight: 700;
    color: #70635e;
  }

  strong {
    font-weight: 900;
  }
`;

export const StandsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;

  img {
    width: 50vw;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40vw;

  h2 {
    color: #5fa5b3;
    font-size: 80px;
    max-width: 80%;
    padding: 10px;
    padding-left: 50px;
    margin-bottom: 30px;
    background: #fff;
    border-radius: 0 20px 20px 0;
    border-right: 7px solid #f7f7f7;
    font-weight: 900;
  }

  p {
    color: #5fa5b3;
    font-size: 24px;
    padding: 10px;
    padding-left: 50px;
  }
`;

export const StandButton = styled.button`
  display: flex;
  background: #d9d9d9;
  border: none;
  border-radius: 10px;
  color: #fff;
  padding: 5px 0;
  font-size: 24px;
  font-weight: bold;
  place-items: center;
  justify-content: center;
  transition: 0.2s;
  width: 100%;

  &:hover {
    background: ${darken(0.03, '#5fa5b3')};
  }

  svg {
    margin-top: 2px;
    background: #fff;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

export const CoffeeBreakContainer = styled.button`
  background: linear-gradient(-90deg, #5fa5b3, #c8e3e8);
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  color: #fff;
  width: 40vw;
  margin: 200px auto;
  margin-left: 35vw;
  border-right: 7px solid #f7f7f7;
  border-bottom: 7px solid #f7f7f7;

  div {
    margin-left: 50%;
    margin-right: 20px;
  }

  h2 {
    font-size: 42px;
    font-weight: 400;

    strong {
      font-weight: 900;
    }
  }

  h3 {
    margin-top: 20px;
  }

  img {
    position: absolute;
    max-width: 28vw;
    margin-left: -12vw;
  }
`;

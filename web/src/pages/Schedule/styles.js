import styled from 'styled-components';
import { darken } from 'polished';
import banner1 from '~/assets/banner1.jpg';
import background from '~/assets/background.png';

export const Container = styled.div`
  width: 100vw;
  padding: 100px 0;
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


    li {
      display: grid;
      grid-template-columns: 300px 1fr 1fr;
      margin:100px;
      justify-content: space-between;
      place-items: center;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #969696;
    font-size: 20px;
  }
`;

export const Date = styled.div`
  font-size: 42px;
  color: #ffb1a1;
  font-weight: 700;
  border-bottom: 3px solid #ffb1a1;
  padding-bottom: 20px;
  margin: 50px;
`;
export const Hour = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-right: 20px;
  font-weight: 700;
  color: #969696;
`;
export const Title = styled.div`
  color: #969696;
  font-weight: 700;
  font-size: 20px;
`;
export const ProfilePic = styled.div``;

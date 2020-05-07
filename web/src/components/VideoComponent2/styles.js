import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
`;

export const VideoContainer = styled.div`
  position: relative;
  height: 55vh;
  width: 100%;
  border: 0px solid black;
  border-radius: 20px;
  overflow: hidden;

  video {
    position: absolute;
    width: 100%;
  }
`;

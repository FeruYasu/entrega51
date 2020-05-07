import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-items: center;

  .flex-item {
    display: flex;

    video {
      width: 20%;
    }
  }
`;

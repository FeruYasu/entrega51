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
`;

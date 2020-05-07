import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward, MdGroup } from 'react-icons/md';
import api from '~/services/api';
import vip from '~/assets/vip.png';
import standimg from '~/assets/stands3D.png';
import epoca from '~/assets/epoca.png';
import woman from '~/assets/woman.png';
import man from '~/assets/man.png';
import woman2 from '~/assets/woman2.png';
import history from '~/services/history';

import {
  Container,
  TextContainer,
  Date,
  Hour,
  Title,
  ProfilePic,
} from './styles';

export default function Schedule() {
  return (
    <Container>
      <header>
        <h1>Programação</h1>
      </header>

      <ul>
        <Date>SEGUNDA-FEIRA (05/05)</Date>
        <li>
          <Hour>08:00 - 09:00</Hour>
          <TextContainer>
            <Title>Mercado da Beleza em meio à pandemia</Title>
            <p>
              Palestra com Ana Beker, fundadora do Instituto Bela, sobre as
              mudanças para o mercado de beleza no período de quarentena e quais
              as expectativas para o futuro.
            </p>
          </TextContainer>
          <ProfilePic>
            <img src={woman} alt="person" />
          </ProfilePic>
        </li>
        <li>
          <Hour>08:00 - 09:00</Hour>
          <TextContainer>
            <Title>Mercado da Beleza em meio à pandemia</Title>
            <p>
              Palestra com Ana Beker, fundadora do Instituto Bela, sobre as
              mudanças para o mercado de beleza no período de quarentena e quais
              as expectativas para o futuro.
            </p>
          </TextContainer>
          <ProfilePic>
            <img src={woman2} alt="person" />
          </ProfilePic>
        </li>
        <li>
          <Hour>08:00 - 09:00</Hour>
          <TextContainer>
            <Title>Mercado da Beleza em meio à pandemia</Title>
            <p>
              Palestra com Ana Beker, fundadora do Instituto Bela, sobre as
              mudanças para o mercado de beleza no período de quarentena e quais
              as expectativas para o futuro.
            </p>
          </TextContainer>
          <ProfilePic>
            <img src={man} alt="person" />
          </ProfilePic>
        </li>
      </ul>
      <ul>
        <Date>TERÇA-FEIRA (06/05)</Date>

        <li>
          <Hour>08:00 - 09:00</Hour>
          <TextContainer>
            <Title>Mercado da Beleza em meio à pandemia</Title>
            <p>
              Palestra com Ana Beker, fundadora do Instituto Bela, sobre as
              mudanças para o mercado de beleza no período de quarentena e quais
              as expectativas para o futuro.
            </p>
          </TextContainer>
          <ProfilePic>
            <img src={woman2} alt="person" />
          </ProfilePic>
        </li>
        <li>
          <Hour>08:00 - 09:00</Hour>
          <TextContainer>
            <Title>Mercado da Beleza em meio à pandemia</Title>
            <p>
              Palestra com Ana Beker, fundadora do Instituto Bela, sobre as
              mudanças para o mercado de beleza no período de quarentena e quais
              as expectativas para o futuro.
            </p>
          </TextContainer>
          <ProfilePic>
            <img src={man} alt="person" />
          </ProfilePic>
        </li>
      </ul>
    </Container>
  );
}

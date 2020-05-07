import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward, MdGroup } from 'react-icons/md';
import api from '~/services/api';
import vip from '~/assets/vip.png';
import standimg from '~/assets/stands3D.png';
import epoca from '~/assets/epoca.png';
import coffe from '~/assets/cafe.png';
import history from '~/services/history';

import {
  Container,
  Top,
  LeftSide,
  Banner1,
  LeftDown,
  BannerDown,
  RightSide,
  Banner2,
  BannerText,
  BannerText2,
  BannerButton,
  StandsHeader,
  TextContainer,
  StandButton,
  CoffeeBreakContainer,
} from './styles';

export default function Home() {
  const [stands, setStands] = useState([]);

  useEffect(() => {
    async function listStands() {
      const response = await api.get('/rooms');
      setStands(response.data);
    }
    // postToken();
    listStands();
  }, []);

  function handleEnterRoom(id) {
    console.log(id);
    history.push(`/stand/${id}`);
  }

  return (
    <Container>
      <header>
        <h1>Palestras</h1>
      </header>
      <Top>
        <LeftSide>
          <Banner1>
            <BannerText>
              <h4>Acontecendo Agora</h4>
              <h3>Mercado da beleza em meio à pandemia</h3>
              <p>Com Ana Beker</p>
              <Link to="/palestra/2">
                <BannerButton>
                  <p>Entrar na sala</p>
                  <MdArrowForward size={36} color="#5fa5b3" />
                </BannerButton>
              </Link>
            </BannerText>
          </Banner1>
          <LeftDown>
            <Link to="desafios">
              <BannerDown color="blue">
                <div>
                  <h3>Conclua nossos Desafios!</h3>
                  <p>E ganhe brindes exclusivos</p>
                </div>
                <MdKeyboardArrowRight size={40} />
              </BannerDown>
            </Link>

            <Link to="/schedule">
              <BannerDown color="green">
                <div>
                  <h3>Confira a programação completa</h3>
                </div>
                <MdKeyboardArrowRight size={40} />
              </BannerDown>
            </Link>
          </LeftDown>
        </LeftSide>
        <RightSide>
          <Banner2>
            <img src={vip} alt="oi" />
            <BannerText2>
              <h3>
                Sala<strong>VIP</strong>
              </h3>
              <Link to="/coffee">
                <BannerButton>
                  <p>Entrar</p>
                  <MdArrowForward size={36} color="#70635e" />
                </BannerButton>
              </Link>
            </BannerText2>
          </Banner2>
        </RightSide>
      </Top>
      <StandsHeader>
        <TextContainer>
          <h2>Stands</h2>
          <p>
            <strong>
              Caminhe entre os stands, clique para interagir e conheça melhor
              cada um <br />
              <br />
            </strong>
            Explore as novidades, tendências e oportunidades disponíveis para
            você. Algumas podem estar distribuindo ou sorteando brindes,
            realizando promoções e até promovendo workshops. Mas para saber,
            você precisa ir até lá para descobrir.
          </p>
        </TextContainer>
        <img
          src={standimg}
          alt="Imagem de um mapa de stand com blocos em  3D"
        />
      </StandsHeader>
      <ul>
        {stands.map(stand => (
          <li>
            <img src={stand.logo.url} alt="" />
            <StandButton
              onClick={() => {
                handleEnterRoom(stand.id);
              }}
            >
              <p>Entrar na Sala</p>
              <MdKeyboardArrowRight size={26} color="#999" />
            </StandButton>
            <div>
              <MdGroup />
              <p>22 vagas</p>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/coffee">
        <CoffeeBreakContainer>
          <img src={coffe} alt="" />
          <div>
            <h2>
              <strong>Coffee</strong>break
            </h2>
            <h3>Sem palestras no momento?</h3>
            <p>
              Chega mais, pega um xícara de café, e aproveita para trocar
              experiências com outros profissionais!
            </p>
          </div>
        </CoffeeBreakContainer>
      </Link>
    </Container>
  );
}

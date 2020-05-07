import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight, MdArrowForward, MdGroup } from 'react-icons/md';
import api from '~/services/api';
import vip from '~/assets/vip.png';
import standimg from '~/assets/stands3D.png';
import epoca from '~/assets/epoca.png';
import coffe from '~/assets/cafe.png';
import history from '~/services/history';

import gamePage from '~/assets/gamefication.png';

import { Container } from './styles';

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
      <img src={gamePage} />
    </Container>
  );
}

import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';
import LogoInput from './LogoInput';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Insira o nome da empresa'),
  description: Yup.string().required('Insira uma descrição'),
  type: Yup.string().required('O tipo é obrigatório'),
  logo_id: Yup.number().required('A logo é obrigatória'),
});

export default function Profile() {
  async function handleSubmit({
    logo_id,
    title,
    description,
    type,
    start_time,
    end_time,
  }) {
    if (!logo_id) {
      toast.error('A logo é obrigatória');
    }

    await api.post('/rooms', {
      title,
      description,
      type,
      logo_id,
    });

    history.push('/home');
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <LogoInput name="logo_id" />

        <Input name="title" placeholder="Nome da Sala" />
        <Input
          name="description"
          type="description"
          placeholder="Descrição da Sala"
        />

        <Input
          type="type"
          name="type"
          placeholder="Escolha o tipo da Palestra"
        />

        <Input
          type="start_time"
          name="start_time"
          placeholder="Data de início"
        />
        <Input type="end_time" name="end_time" placeholder="Data de término" />

        <hr />

        <button type="submit">Criar Sala</button>
      </Form>
    </Container>
  );
}

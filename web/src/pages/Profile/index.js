import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input
          name="email"
          type="email"
          placeholder="Seu endereço de e-email"
        />

        <Input type="CPF" name="cpf" placeholder="Digite seu CPF" />

        <Link to="/mudarsenha">Mudar Senha</Link>

        <hr />

        {/* <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />

        <Input type="password" name="password" placeholder="Nova Senha" />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        /> */}

        <h2>Endereço</h2>
        <Input type="city" name="city" placeholder="Cidade" />
        <Input type="state" name="state" placeholder="Estado" />
        <Input type="street" name="street" placeholder="Rua" />
        <Input type="infos" name="infos" placeholder="Informaçoes Adicionais" />
        <Input type="zipcode" name="zipcode" placeholder="CEP" />

        <hr />

        <h2>Formação</h2>
        <Input type="degree" name="degree" placeholder="Formação" />
        <Input type="company" name="company" placeholder="Empresas" />
        <Input type="jobtitle" name="jobtitle" placeholder="Cargo" />
        <Input type="linkedin" name="linkedin" placeholder="Link do Linkedin" />

        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="submit" onClick={handleSignOut}>
        Sair do Trama
      </button>
    </Container>
  );
}

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    console.tron.log(payload.data);
    const {
      name,
      email,
      avatar_id,
      cpf,
      city,
      state,
      street,
      infos,
      zipcode,
      degree,
      company,
      jobtitle,
      lindkedin,
    } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      cpf,
      city,
      state,
      street,
      infos,
      zipcode,
      degree,
      company,
      jobtitle,
      lindkedin,
    };

    const response = yield call(api.put, `users/${4}`, profile);

    toast.success('Perfil atualizado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

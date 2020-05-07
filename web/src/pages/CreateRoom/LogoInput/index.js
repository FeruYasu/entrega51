import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import logo from '~/assets/logo.svg';

import { Container } from './styles';

export default function LogoInput() {
  const { defaultValue, registerField } = useField('logo_id');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPriview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'logo_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPriview(url);
  }

  return (
    <Container>
      <label htmlFor="logo_id">
        <img src={preview || logo} alt="" />
        <input
          type="file"
          id="logo_id"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

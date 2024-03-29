import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import logo from '~/assets/abrigosemlogo.jpg';
import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url_300);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
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
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || logo} alt="" />

        <input
          type="file"
          id="avatar"
          width="250px"
          height="250px"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

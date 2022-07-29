import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

const Container = styled.div`
  margin: 20px;
`;

interface IProps {
  //   memos: [];
  //   setMemos: () => void;
  getMemos: () => void;
}

export default function AddMemo() {
  const titleInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLInputElement>(null);
  const token = localStorage.getItem('token');

  const props: IProps = useOutletContext();

  console.log(3333);

  const handleClickSave = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token!,
      };
      const params = {
        title: titleInput.current!.value,
        content: contentInput.current!.value,
      };
      const res = await axios.post('/todos', params, { headers });
      props.getMemos();
      //   useNavigate(`/memo/${res.data.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <input type='text' name='title' ref={titleInput} />
      <input type='text' name='content' ref={contentInput} />
      <input type='button' value='추가' onClick={handleClickSave} />
    </Container>
  );
}

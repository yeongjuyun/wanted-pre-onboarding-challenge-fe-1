import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid black;
  margin: 20px;
`;

interface Memo {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
}

interface IProps {
  getMemos: () => void;
}

export default function Memo() {
  const { id } = useParams();
  const props: IProps = useOutletContext();
  const navigate = useNavigate();
  const [isUpdate, setIsUpdate] = useState(false);
  const [memo, setMemo] = useState<Memo>({
    id: '',
    title: '',
    content: '',
    createdAt: '',
    updatedAt: '',
  });

  const getMemo = async () => {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: token!,
    };
    const res = await axios.get(`/todos/${id}`, { headers });
    setMemo(res.data.data);
  };
  useEffect(() => {
    getMemo();
    setIsUpdate(false);
  }, [id]);

  const UpdateMemo = () => {
    const titleInput = useRef<HTMLInputElement>(null);
    const contentInput = useRef<HTMLInputElement>(null);
    const token = localStorage.getItem('token');

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
        const res = await axios.put(`/todos/${id}`, params, { headers });
        props.getMemos();
        getMemo();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div>
        <input type='text' name='title' ref={titleInput} />
        <input type='text' name='content' ref={contentInput} />
        <input type='button' value='저장' onClick={handleClickSave} />
        <input type='button' value='취소' onClick={() => setIsUpdate(false)} />
      </div>
    );
  };

  const handleClickDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token!,
      };
      await axios.delete(`/todos/${id}`, { headers });
      props.getMemos();
      console.log('삭제되었습니다.');
      navigate('/memo');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div>{memo?.title}</div>
      <div>{memo?.content}</div>
      <div>{memo?.updatedAt}</div>
      {isUpdate && <UpdateMemo />}
      <input
        type='button'
        value='수정'
        onClick={() => {
          setIsUpdate(true);
        }}
      />
      <input type='button' value='삭제' onClick={handleClickDelete} />
    </Container>
  );
}

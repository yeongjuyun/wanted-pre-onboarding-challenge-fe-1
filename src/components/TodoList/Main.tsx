import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect, useCallback } from 'react';

const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 20px;
  display: flex;
`;

const Lists = styled.ul``;

interface Memo {
  id?: number;
  title: string;
  content: string;
  createdAt?: number;
}

export default function Main() {
  const [memos, setMemos] = useState<Memo[]>([]);

  const getMemos = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        Authorization: token!,
      };
      const res = await axios.get('/todos', { headers });
      setMemos(() => res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMemos();
  }, []);

  return (
    <Container>
      <ul>
        {memos.map((memo, idx) => (
          <li key={idx}>
            <Link to={`/memo/${memo.id}`}>{memo.title}</Link>
          </li>
        ))}
      </ul>
      <Link to='/memo/add'>
        <button>새로운메모</button>
      </Link>
      <Outlet context={{ getMemos }} />
    </Container>
  );
}

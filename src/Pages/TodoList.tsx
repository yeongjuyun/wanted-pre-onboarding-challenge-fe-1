import Main from '../components/TodoList/Main';
import Sidebar from '../components/TodoList/Sidebar';
import styled from 'styled-components';
import Nav from '../components/Nav';

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  display: flex;
`;

export default function TodoList() {
  return (
    <div>
      <Nav />
      <Container>
        <Sidebar />
        <Main />
      </Container>
    </div>
  );
}

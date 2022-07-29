import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 400px;
  /* height: 100vh; */
  border: 1px solid black;
  margin: 20px;
`;

const SidebarTitle = styled.div`
  font-size: 24px;
`;

const List = styled.ul`
  width: 100%;
`;

const ListItem = styled.li`
  width: 100%;
  height: 30px;
  list-style: none;
`;

export default function Sidebar() {
  return (
    <Container>
      <SidebarTitle>폴더</SidebarTitle>
      <List>
        <ListItem>
          <Link to='/memo'>메모</Link>
        </ListItem>
        <ListItem>
          <Link to='/trash'>휴지통</Link>
        </ListItem>
      </List>
    </Container>
  );
}

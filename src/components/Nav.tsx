import styled from 'styled-components';
import { ButtonLink } from './AuthStyle';
import { useNavigate } from 'react-router-dom';

const Contianier = styled.nav`
  width: 100%;
  height: 50px;
  background-color: red;
`;

export default function Nav() {
  const navigate = useNavigate();
  const handleClickLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <Contianier>
      Nav
      <ButtonLink onClick={handleClickLogout}>Logout</ButtonLink>
    </Contianier>
  );
}

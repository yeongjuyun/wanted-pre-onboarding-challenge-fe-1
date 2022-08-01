import styled from 'styled-components';

export const Container = styled.div`
  width: 478px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

export const Form = styled.form`
  width: 100%;
`;

export const InputDiv = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0;
  display: flex;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const ValidateText = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-left: auto;
  color: red;
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  height: 48px;
  font-size: 16px;
  border: ${(props) =>
    props.error ? '1px solid red' : '1px solid rgb(141 146 159)'};
  border-radius: 5px;
  padding: 0 12px;
  margin-top: 5px;
  box-sizing: border-box;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
  ::placeholder {
    color: #c8c8c8;
  }
`;

export const Logo = styled.img`
  height: 27px;
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-left: 7px;
`;

export const LineDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  span {
    flex: 1;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    padding: 0 10px;
  }
`;

export const Line = styled.div`
  height: 1px;
  flex: 7;
  background-color: black;
  width: 100%;
  margin: 20px 0;
`;

export const ButtonLink = styled.button`
  font-size: 14px;
  font-weight: 500;
  border: 0;
  outline: 0;
  text-decoration-line: underline;
  background-color: transparent;
  /* margin-left: auto; */
  float: right;
  margin-bottom: 10px;
  margin-top: 5px;
  cursor: pointer;

  :hover {
    color: #2e5cff;
  }
`;

export const SignupDiv = styled.div`
  display: flex;

  p {
    font-size: 16px;
    font-weight: 500;
  }
  button {
    font-size: 16px;
    /* margin-left: 0; */
    margin-top: 0;
    margin-bottom: 0;
  }
`;

import styled from 'styled-components';
import Button from './Button';
import * as imgs from '../imgs';
import * as AuthStyle from './AuthStyle';

export default function LoginForm() {
  return (
    <AuthStyle.Container>
      <AuthStyle.MainTitle>로그인</AuthStyle.MainTitle>
      <AuthStyle.InputDiv>
        <AuthStyle.Label htmlFor='inputName'>이메일</AuthStyle.Label>
        <AuthStyle.Input
          type='text'
          id='inputName'
          placeholder='이메일 주소를 입력하세요'
        />
      </AuthStyle.InputDiv>
      <AuthStyle.InputDiv>
        <AuthStyle.Label htmlFor='inputName'>비밀번호</AuthStyle.Label>
        <AuthStyle.Input
          type='text'
          id='inputName'
          placeholder='비밀번호는 6자리 이상이어야 합니다'
        />
      </AuthStyle.InputDiv>
      <AuthStyle.ButtonLink>비밀번호 찾기</AuthStyle.ButtonLink>
      <AuthStyle.InputDiv>
        <Button size='large' color='black' fullWidth>
          로그인 하기
        </Button>
      </AuthStyle.InputDiv>
      <AuthStyle.LineDiv>
        <AuthStyle.Line />
        <span>또는</span>
        <AuthStyle.Line />
      </AuthStyle.LineDiv>
      <AuthStyle.InputDiv>
        <Button size='large' color='white' fullWidth>
          <AuthStyle.Logo src={imgs.kakaoIcon}></AuthStyle.Logo>
          <AuthStyle.ButtonText>카카오 로그인</AuthStyle.ButtonText>
        </Button>
      </AuthStyle.InputDiv>
      <AuthStyle.InputDiv>
        <Button size='large' color='white' fullWidth>
          <AuthStyle.Logo src={imgs.googleIcon}></AuthStyle.Logo>
          <AuthStyle.ButtonText>구글 로그인</AuthStyle.ButtonText>
        </Button>
      </AuthStyle.InputDiv>
      <AuthStyle.SignupDiv>
        <p>계정이 없으신가요?</p>
        <AuthStyle.ButtonLink>가입하기</AuthStyle.ButtonLink>
      </AuthStyle.SignupDiv>
    </AuthStyle.Container>
  );
}

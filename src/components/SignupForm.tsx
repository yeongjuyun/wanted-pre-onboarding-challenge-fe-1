import * as imgs from '../imgs';
import * as AuthStyle from './AuthStyle';
import Button from './Button';

export default function SignupForm() {
  return (
    <AuthStyle.Container>
      <AuthStyle.MainTitle>회원가입</AuthStyle.MainTitle>
      <AuthStyle.InputDiv>
        <AuthStyle.Label htmlFor='inputEmail'>이메일</AuthStyle.Label>
        <AuthStyle.Input
          type='text'
          id='inputEmail'
          placeholder='이메일 주소를 입력하세요'
        />
      </AuthStyle.InputDiv>
      <AuthStyle.InputDiv>
        <AuthStyle.Label htmlFor='inputPassword'>비밀번호</AuthStyle.Label>
        <AuthStyle.Input
          type='text'
          id='inputPassword'
          placeholder='비밀번호를 입력하세요'
        />
      </AuthStyle.InputDiv>
      <AuthStyle.InputDiv>
        <Button size='large' color='black' fullWidth>
          회원가입 하기
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
          <AuthStyle.ButtonText>카카오 계정으로 가입</AuthStyle.ButtonText>
        </Button>
      </AuthStyle.InputDiv>
      <AuthStyle.InputDiv>
        <Button size='large' color='white' fullWidth>
          <AuthStyle.Logo src={imgs.googleIcon}></AuthStyle.Logo>
          <AuthStyle.ButtonText>구글 계정으로 가입</AuthStyle.ButtonText>
        </Button>
      </AuthStyle.InputDiv>
      <AuthStyle.SignupDiv>
        <p>이미 가입하셨나요?</p>
        <AuthStyle.ButtonLink>로그인</AuthStyle.ButtonLink>
      </AuthStyle.SignupDiv>
    </AuthStyle.Container>
  );
}

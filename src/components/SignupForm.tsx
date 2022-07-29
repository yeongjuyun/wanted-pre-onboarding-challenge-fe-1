import React, { useState, useRef } from 'react';
import * as imgs from '../imgs';
import * as AuthStyle from './AuthStyle';
import Button from './Button';
import { regEmail } from '../utils/validation';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
  const navigate = useNavigate();
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [buttonError, setButtonError] = useState<boolean>(true);

  const buttonDisabled = emailError || passwordError || buttonError;

  const handleChangeEmail = (): void => {
    if (
      regEmail.test(emailInput.current!.value) !== true &&
      emailInput.current!.value.length >= 1
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleChangePassword = (): void => {
    if (
      passwordInput.current!.value.length < 8 &&
      passwordInput.current!.value.length >= 1
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (passwordInput.current!.value.length === 0) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  };

  const handleClickSignup = async () => {
    const data = {
      email: emailInput.current!.value,
      password: passwordInput.current!.value,
    };
    try {
      await axios.post('/users/create', data);
      console.log('회원가입완료', data);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthStyle.Container>
      <AuthStyle.Form>
        <AuthStyle.MainTitle>회원가입</AuthStyle.MainTitle>
        <AuthStyle.InputDiv>
          <AuthStyle.Label htmlFor='inputEmail'>
            이메일
            <AuthStyle.ValidateText>
              {emailError && '유효하지 않은 이메일 주소입니다.'}
            </AuthStyle.ValidateText>
          </AuthStyle.Label>
          <AuthStyle.Input
            type='text'
            id='inputEmail'
            placeholder='이메일 주소를 입력하세요'
            error={emailError}
            onChange={handleChangeEmail}
            ref={emailInput}
          />
        </AuthStyle.InputDiv>
        <AuthStyle.InputDiv>
          <AuthStyle.Label htmlFor='inputPassword'>
            비밀번호
            <AuthStyle.ValidateText>
              {passwordError && '유효하지 않은 비밀번호입니다.'}
            </AuthStyle.ValidateText>
          </AuthStyle.Label>
          <AuthStyle.Input
            type='password'
            id='inputPassword'
            placeholder='비밀번호는 8자리 이상이어야 합니다'
            autoComplete='off'
            error={passwordError}
            onChange={handleChangePassword}
            ref={passwordInput}
          />
        </AuthStyle.InputDiv>
        <AuthStyle.InputDiv>
          <Button
            size='large'
            color='black'
            fullWidth
            onClick={handleClickSignup}
            disabled={buttonDisabled}
          >
            가입하기
          </Button>
        </AuthStyle.InputDiv>
      </AuthStyle.Form>
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
        <AuthStyle.ButtonLink onClick={() => navigate('/login')}>
          로그인
        </AuthStyle.ButtonLink>
      </AuthStyle.SignupDiv>
    </AuthStyle.Container>
  );
}

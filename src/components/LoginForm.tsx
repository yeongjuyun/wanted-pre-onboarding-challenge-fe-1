import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import * as imgs from '../imgs';
import * as AuthStyle from './AuthStyle';
import { regEmail } from '../utils/validation';
import axios from 'axios';

export default function LoginForm() {
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

    if (emailInput.current!.value.length === 0) {
      setButtonError(true);
    } else {
      setButtonError(false);
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

  const handleClickLogin = async () => {
    const data = {
      email: emailInput.current!.value,
      password: passwordInput.current!.value,
    };
    try {
      const res = await axios.post('/users/login', data);
      localStorage.setItem('token', res.data.token);
      console.log(res.data.message);
      navigate('/memo');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('이미 로그인되어 있습니다.');
      navigate('/memo');
    }
  }, []);

  return (
    <AuthStyle.Container>
      <AuthStyle.Form>
        <AuthStyle.MainTitle>로그인</AuthStyle.MainTitle>
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
        <AuthStyle.ButtonLink>비밀번호 찾기</AuthStyle.ButtonLink>
        <AuthStyle.InputDiv>
          <Button
            size='large'
            color='black'
            fullWidth
            onClick={handleClickLogin}
            disabled={buttonDisabled}
          >
            로그인 하기
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
        <AuthStyle.ButtonLink onClick={() => navigate('/signup')}>
          가입하기
        </AuthStyle.ButtonLink>
      </AuthStyle.SignupDiv>
    </AuthStyle.Container>
  );
}

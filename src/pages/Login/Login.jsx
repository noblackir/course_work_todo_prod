import React from 'react';
import {AppButton} from "../../components/AppButton/AppButton.jsx";
import {useForm} from "react-hook-form";
import {FormTip, LoginForm, LoginInput, SubmitBlock} from "./Login.styled.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import useAuth from '../../hook/useAuth.jsx';

export const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const {sigIn} = useAuth()

  const fromPage = location?.state?.from?.pathname || '/'

  const onSubmit = (data, e) => {
    e.preventDefault()
    console.log(data);
    localStorage.setItem('isLoggedIn', 'true')
    //sigIn(data, ()=> navigate(fromPage, {replace: true}))
    navigate(fromPage, {replace: true})
  }

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <LoginInput variant="inside" props={{...register('login')}}>Логин</LoginInput>
      <LoginInput variant="inside" props={{...register('password'), type: 'password'}}>Пароль</LoginInput>
      <SubmitBlock>
        <AppButton variant="large" color="#F4644587">Вход</AppButton>
        <FormTip>Забыли пароль?</FormTip>
      </SubmitBlock>
    </LoginForm>
  );
};
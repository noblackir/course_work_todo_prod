import React, { useEffect, useState } from 'react';
import { UserAvatar } from "../UserAvatar/UserAvatar.jsx";
import { MainContainer } from "../components.styled.jsx";
import {
  NavigationContent,
  NavigationItem,
  NavigationLeftSide,
  NavigationLink,
  NavigationRightSide,
  NavigationWrapper,
  SignInButton
} from "./Navigation.styled.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const resolvedUrls = ['/contacts', '/tariffs']

export const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'))
  const [isShowSignInBtn, setIsShowSignInBtn] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const signInHandler = () => {
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn')
    }
    navigate('/login')
  }

  // useEffect(() => {
  //   if (resolvedUrls.includes(location.pathname)) {
  //     return setIsShowSignInBtn(true)
  //   }
  //   return setIsShowSignInBtn(false)
  // }, [location])

  useEffect(() => {
    if (isLoggedIn) {
      return setIsShowSignInBtn(true)
    }
    return setIsShowSignInBtn(false)
  }, [location])


  return (
    <NavigationWrapper>
      <MainContainer>
        <NavigationContent>
          <NavigationLeftSide>
            <NavigationItem>
              <NavigationLink to='/projects'>Проекты</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to='/employees'>Список сотрудников</NavigationLink>
            </NavigationItem>
          </NavigationLeftSide>
          <NavigationRightSide>
            {isShowSignInBtn && (
              <SignInButton onClick={signInHandler}>
                {isLoggedIn ? 'Выход' : 'Вход'}
              </SignInButton>
            )}
            <UserAvatar />
            <p>Привет, name</p>
          </NavigationRightSide>
        </NavigationContent>
      </MainContainer>
    </NavigationWrapper>
  );
};
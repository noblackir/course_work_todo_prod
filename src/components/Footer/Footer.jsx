import React, {useEffect, useState} from 'react';
import {MainContainer} from "../components.styled";
import {FooterContent, FooterLink, FooterWrapper} from "./Footer.styled.jsx";
import {useLocation} from "react-router-dom";

const initialState = {
  contacts: false,
  tariffs: false,
}

export const Footer = () => {
  const [stateLinks, setStateLinks] = useState(initialState)
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/contacts':
        setStateLinks({...initialState, contacts: true})
        break
      case '/tariffs':
        setStateLinks({...initialState, tariffs: true})
        break
      default:
        setStateLinks(initialState)
    }
  }, [location])

  return (
    <FooterWrapper>
      <MainContainer>
        <FooterContent>
          <FooterLink $isActive={stateLinks.contacts} to="/contacts">Контакты</FooterLink>
          <FooterLink $isActive={stateLinks.tariffs} to="/tariffs">Тарифы</FooterLink>
        </FooterContent>
      </MainContainer>
    </FooterWrapper>
  );
};
import React from 'react';
import {MainContainer} from "../../components/components.styled";
import {ContactsHeader, ContactsItem, ItemDescription, ItemHeader, ItemLink} from "./Contacts.styled.jsx";

export const Contacts = () => {
  return (
    <MainContainer>
      <ContactsHeader>Контакты</ContactsHeader>
      <ContactsItem>
        <ItemHeader>Продажи и сотрудничество</ItemHeader>
        <ItemDescription>Мы открыты для всех новых предложений</ItemDescription>
        <ItemLink href="mailto:Astrid@gmail.com">Astrid@gmail.com</ItemLink>
      </ContactsItem>
      <ContactsItem>
        <ItemHeader>Техническая поддержка</ItemHeader>
        <ItemLink href="mailto:Support@gmail.com">Support@gmail.com</ItemLink>
      </ContactsItem>
      <ContactsItem>
        <ItemHeader>Жалобы и претензии</ItemHeader>
        <ItemLink href="mailto:Abuse@gmail.com">Abuse@gmail.com</ItemLink>
      </ContactsItem>
    </MainContainer>
  );
};
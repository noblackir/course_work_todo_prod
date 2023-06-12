import React from 'react';
import {MainContainer} from "../../components/components.styled";
import {AppButton} from "../../components/AppButton/AppButton";
import {
  Possibility,
  TariffCard, TariffDescription, TariffPossibilities,
  TariffsBlock,
  TariffsDescription,
  TariffsHeader,
  TariffsWrapper,
  TariffTitle
} from "./Tariffs.styled.jsx";

export const Tariffs = () => {
  return (
    <MainContainer>
      <TariffsWrapper>
        <TariffsHeader>Тарифы</TariffsHeader>
        <TariffsDescription>Получите мощные функции, средства контроля и адаптации, необходимые для управления проектами вашей группы и организации.</TariffsDescription>
        <TariffsBlock>
          <TariffCard>
            <TariffTitle color="#D0AF59">Basic</TariffTitle>
            <TariffDescription>Для коллективов, которые только начинают заниматься управлением проектами.</TariffDescription>
            <TariffTitle color="#D0AF59">200 р/мес</TariffTitle>
            <AppButton variant="large" color="#D0AF5987">Начать работу</AppButton>
            <TariffPossibilities>
              <Possibility>Неограниченное число задач</Possibility>
              <Possibility>Неограниченное число проектов</Possibility>
              <Possibility>Неограниченное число сообщений</Possibility>
              <Possibility>Неограниченный журнал действий</Possibility>
              <Possibility>Неограниченное хранилище файлов (100 МБ на файл)</Possibility>
              <Possibility>Максимум 15 коллег для совместной работы</Possibility>
            </TariffPossibilities>
          </TariffCard>
          <TariffCard>
            <TariffTitle color="#EB5C5C">Premium</TariffTitle>
            <TariffDescription>Для коллективов, которые только начинают заниматься управлением проектами.</TariffDescription>
            <TariffTitle color="#EB5C5C">1500 р/мес</TariffTitle>
            <AppButton variant="large" color="#F4644587">Начать работу</AppButton>
            <TariffPossibilities>
              <Possibility>Неограниченное число задач</Possibility>
              <Possibility>Неограниченное число проектов</Possibility>
              <Possibility>Неограниченное число сообщений</Possibility>
              <Possibility>Неограниченный журнал действий</Possibility>
              <Possibility>Неограниченное хранилище файлов (100 МБ на файл)</Possibility>
              <Possibility>Максимум 15 коллег для совместной работы</Possibility>
            </TariffPossibilities>
          </TariffCard>
          <TariffCard>
            <TariffTitle color="#F49345D1">Business</TariffTitle>
            <TariffDescription>Для коллективов, которые только начинают заниматься управлением проектами.</TariffDescription>
            <TariffTitle color="#F49345D1">5000 р/мес</TariffTitle>
            <AppButton variant="large" color="#F4934587">Начать работу</AppButton>
            <TariffPossibilities>
              <Possibility>Неограниченное число задач</Possibility>
              <Possibility>Неограниченное число проектов</Possibility>
              <Possibility>Неограниченное число сообщений</Possibility>
              <Possibility>Неограниченный журнал действий</Possibility>
              <Possibility>Неограниченное хранилище файлов (100 МБ на файл)</Possibility>
              <Possibility>Максимум 15 коллег для совместной работы</Possibility>
            </TariffPossibilities>
          </TariffCard>
        </TariffsBlock>
      </TariffsWrapper>
    </MainContainer>
  );
};
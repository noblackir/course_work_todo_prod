import React from 'react';
import {UserAvatar} from "../../../components/UserAvatar/UserAvatar";
import styled from "styled-components";
import {AppCard} from "../../../components/components.styled.jsx";
import IconDone from '../../../assets/icons/done.svg'
import {AppButton} from "../../../components/AppButton/AppButton.jsx";

const TaskCard = styled(AppCard)`
  cursor: pointer;
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.20);
  }
`

const TaskContent = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const TaskTitleBlock = styled('div')`
  display: flex;
  align-items: center;
  gap: 7px;
`

const TitleIcon = styled('img')`
  width: 24px;
  height: 24px;
`

const TaskTitle = styled('h4')`
  margin: 0;
  padding: 0;
  font-size: 18px;
`

const TaskLabels = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`

const TaskFooter = styled(TaskTitleBlock)``

const ExpirationDate = styled('p')`
  padding: 0;
  margin: 0;
  color: #1B0404;
  font-size: 14px;
`

export const BoardTask = ({ title, expirationDate }) => {
  return (
    <TaskCard>
      <TaskContent>
        <TaskTitleBlock>
          <TitleIcon src={IconDone} />
          <TaskTitle>{ title }</TaskTitle>
        </TaskTitleBlock>
        <TaskLabels>
          <AppButton color="#F49345D1" variant="small">Низкий</AppButton>
          <AppButton color="#D9D9D9" variant="small">По плану</AppButton>
        </TaskLabels>
        <TaskFooter>
          <UserAvatar />
          <ExpirationDate>{ expirationDate }</ExpirationDate>
        </TaskFooter>
      </TaskContent>
    </TaskCard>
  );
};
import React from 'react';
import {UserAvatar} from "../../../components/UserAvatar/UserAvatar";
import {AppButton} from "../../../components/AppButton/AppButton";
import {
  ActionButtons,
  AvatarColumn,
  CardWrapper,
  ContentColumn,
  EmployeePost,
  FIO,
  TasksBlock,
  TasksHeader, TasksItem
} from "../Employee.styled.jsx";
import {useNavigate} from "react-router-dom";

export const EmployeeCard = ({ employee }) => {
  const navigate = useNavigate()

  const redirectToEdit = (id) => {
    return navigate(`/edit-employee?id=${id}`)
  }

  return (
    <CardWrapper>
      <AvatarColumn>
        <UserAvatar size={{ height: '64px', width: '64px' }} />
      </AvatarColumn>
      <ContentColumn>
        <FIO>{ employee.fio }</FIO>
        <EmployeePost>{ employee.position }</EmployeePost>
        <AppButton color="#EB5C5C" variant="small">Дать задание</AppButton>
        <TasksHeader>Задания</TasksHeader>
        <TasksBlock>
          {employee.tasks.map(task => (
            <TasksItem key={task.id}>{ task.title }</TasksItem>
          ))}
        </TasksBlock>
        <ActionButtons>
          <AppButton onClick={() => redirectToEdit(employee.id)} color="#F49345D1" variant="small">Редактировать</AppButton>
        </ActionButtons>
      </ContentColumn>
    </CardWrapper>
  );
};
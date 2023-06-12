import styled from "styled-components";
import {AppCard} from "../../components/components.styled.jsx";
import {Link} from "react-router-dom";

export const CardWrapper = styled(AppCard)`
  padding: 15px;
  display: flex;
`

export const AvatarColumn = styled('div')`
  padding: 0 15px;
`

export const ContentColumn = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FIO = styled('p')`
  padding: 0;
  margin: 0;
  font-size: 20px;
`

export const EmployeePost = styled('p')`
  padding: 0;
  margin: 0;
  font-size: 16px;
`

export const TasksBlock = styled('ol')`
  padding-left: 17px;
  margin: 0;
`

export const TasksHeader = styled('p')`
  padding: 0;
  margin: 0;
  font-size: 16px;
`

export const TasksItem = styled('li')`
  padding: 0;
  margin: 0;
`

export const ActionButtons = styled('div')`
  display: flex;
  width: 100%;
  justify-content: end;
`

export const EmployeesHeader = styled('div')`
  display: flex;
  align-items: center;
  margin: 15px 0;
`

export const HeaderLink = styled(Link)`
  color: #000;
  font-size: 18px;
`

export const EmployeesGrid = styled('div')`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
`

export const EmployeesColumn = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`
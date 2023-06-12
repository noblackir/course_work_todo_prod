import styled from "styled-components";
import {AppCard, MainContainer} from "../../components/components.styled.jsx";

export const EmployeeWrapper = styled(MainContainer)`
  padding-top: 50px;
  box-sizing: border-box;
`

export const FormCard = styled(AppCard)`
  padding: 20px;
  display: flex;
  width: 100%;
  gap: 20px;
`

export const FormAvatarColumn = styled('div')``

export const FormContent = styled('form')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FormButtonBlock = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 10px 0;
`

export const FormButton = styled('button')`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  background: #fff;
  padding: 5px 20px;
  cursor: pointer;
  transition: .2s;
  &:active {
    box-shadow: none;
  }
`
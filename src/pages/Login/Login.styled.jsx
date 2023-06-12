import styled from "styled-components";
import {AppInput, InputField} from "../../components/AppInput/AppInput.jsx";
import {Link} from "react-router-dom";

export const LoginInput = styled(AppInput)`
  ${InputField} {
    font-weight: 900;
    font-size: 20px;
    color: rgba(0, 0, 0, .9);
    font-style: italic;
    &::placeholder {
      font-weight: 900;
      font-size: 20px;
      color: rgba(0, 0, 0, .9);
      font-style: italic;
    } 
  }
`
export const LoginForm = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const SubmitBlock = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`
export const FormTip = styled(Link)`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 16px;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
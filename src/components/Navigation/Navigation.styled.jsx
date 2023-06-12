import styled from "styled-components";
import {Link} from "react-router-dom";

export const NavigationWrapper = styled('nav')`
  background: linear-gradient(90.89deg, #EB5C5C 11.67%, rgba(244, 147, 69, 0.82) 76.4%);
`

export const NavigationContent = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
`

export const NavigationLeftSide = styled('div')`
  flex-grow: 1;
  display: flex;
  
`

export const NavigationRightSide = styled('div')`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
`

export const NavigationItem = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  &:first-child {
    padding-left: 0;
  }
`

export const NavigationLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

export const SignInButton = styled('button')`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`
import styled from "styled-components";
import {Link} from "react-router-dom";

export const FooterWrapper = styled('div')`
  width: 100%;
`

export const FooterContent = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const FooterLink = styled(Link)`
  flex-grow: 1;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: ${({ $isActive }) => $isActive ? 'underline' : 'none' };
  color: #000;
  &:hover {
    background: #efefef;
    text-decoration: underline;
  }
`
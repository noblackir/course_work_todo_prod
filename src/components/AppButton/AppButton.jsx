import React from 'react';
import styled from "styled-components";

const variants = {
  small: {
    p: '0 10px',
    fz: '14px',
    width: 'fit-content',
  },
  common: {
    p: '10px',
    fz: 16,
  },
  large: {
    p: '10px',
    fz: '25px',
    width: '100%',
  }
}

const ButtonWrapper = styled('button')`
  border: none;
  border-radius: 10px;
  min-width: 80px;
  padding: ${({ variant }) => variants[variant].p };
  font-size: ${({ variant }) => variants[variant].fz };
  background: ${({ color }) => color };
  width: ${({ variant }) => variants[variant]?.width };
  cursor: pointer;
  
`

export const AppButton = ({ color, variant='small', onClick, children }) => {
  return (
    <ButtonWrapper onClick={onClick} color={color} variant={variant}>
      { children } 
    </ButtonWrapper>
  );
};
import React from 'react';
import styled from "styled-components";


const variants = {
    small: {
        p: '10px 10px',
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

const InputLabel = styled('label')`
  font-size: 16px;
`
const options = ['Срочно', 'По плану', 'Отложенно'];


const SelectBlock = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${({ variant }) => variants[variant].fz };
`

const SelectWrapper = styled('select')`
  border: none;
  border-radius: 10px;
  min-width: 80px;
  padding: ${({ variant }) => variants[variant].p};
  font-size: ${({ variant }) => variants[variant].fz};
  background: ${({ color }) => color};
  width: ${({ variant }) => variants[variant]?.width};
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

export const AppSelect = ({ variant = 'small', id, children }) => {
    return (
        <SelectBlock variant={variant}>
            <InputLabel>{children}</InputLabel>
            
        </SelectBlock>
    );
};
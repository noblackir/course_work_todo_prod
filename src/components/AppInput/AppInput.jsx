import React from 'react';
import styled from "styled-components";

const InputBlock = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const InputLabel = styled('label')`
  font-size: 16px;
`

export const InputField = styled('input')`
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  outline: none;
  border: none;
  border-radius: 15px;
  transition: .2s;

  &:focus {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  }
`

export const AppInput = ({className, variant, props, id, children}) => {
  const placeholder = variant === 'inside' ? children : ''

  return (
    <InputBlock className={className}>
      {!placeholder && <InputLabel htmlFor={id}>{children}</InputLabel>}
      <InputField id={id}
                  placeholder={placeholder}
                  name={id}
                  {...props}
      />
    </InputBlock>
  );
};
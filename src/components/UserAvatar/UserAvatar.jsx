import React from 'react';
import styled from "styled-components";
import userLogo from './assets/user-avatar.svg'

const AvatarWrapper = styled('div')`
  width: ${({ size }) => size.width };
  height: ${({ size }) => size.height };
  border-radius: 100%;
`

const Avatar = styled('img')`
  width: 100%;
  height: 100%;
`

export const UserAvatar = ({ size={ height: '40px', width: '40px' } }) => {
  return (
    <AvatarWrapper size={size}>
      <Avatar src={userLogo}/>
    </AvatarWrapper>
  );
};
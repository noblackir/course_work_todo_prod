import React from 'react';
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import Facebook from '../../assets/icons/fb.png'
import Instagram from '../../assets/icons/inst.png'
import Vk from '../../assets/icons/vk.png'
import Google from '../../assets/icons/google.png'
import Git from '../../assets/icons/git.png'
import LoginImage from '../../assets/loginPicture.png'
import {Footer} from "../../components/Footer/Footer";

const Template = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #F5F5F5;
  overflow: hidden;
`
const LoginWrapper = styled('div')`
  width: 80%;
  max-width: 1200px;
  height: 80%;
  display: flex;
`
const LoginHalfPart = styled('div')`
  border-radius: 10px;
  background: #fff;
  flex-grow: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
`
const LoginHeader = styled('h1')`
  font-weight: 400;
  font-size: 45px;
  text-align: center;
  margin-top: 65px;
`
const LoginContainer = styled('div')`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderStrong = styled('strong')`
  font-size: 50px;
`
const DividerBlock = styled('div')`
  width: 100%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`
const HalfDivider = styled('span')`
  flex-grow: 1;
  height: 1.5px;
  background: #1B0404;
`
const DividerText = styled('p')`
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  font-style: italic;
`
const SocialMediaLogins = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`
const SocialMediaItem = styled('div')`
  flex-grow: 1;
  cursor: pointer;
`
const SocialMedia = styled('img')`
  border-radius: 100%;
  width: 100%;
`
const LoginPicture = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const LoginLayout = () => {
  return (
    <Template>
      <LoginWrapper>
        <LoginHalfPart>
          <LoginHeader>Добро пожаловать в<br/><HeaderStrong>Астрид</HeaderStrong></LoginHeader>
          <LoginContainer>
            <Outlet/>
            <DividerBlock>
              <HalfDivider></HalfDivider>
              <DividerText>или</DividerText>
              <HalfDivider></HalfDivider>
            </DividerBlock>
            <SocialMediaLogins>
              <SocialMediaItem>
                <SocialMedia src={Facebook} alt="Facebook"/>
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMedia src={Vk} alt="Vk"/>
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMedia src={Instagram} alt="Instagram"/>
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMedia src={Google} alt="Google"/>
              </SocialMediaItem>
              <SocialMediaItem>
                <SocialMedia src={Git} alt="Git"/>
              </SocialMediaItem>
            </SocialMediaLogins>
          </LoginContainer>
        </LoginHalfPart>
        <LoginHalfPart>
          <LoginPicture src={LoginImage}/>
        </LoginHalfPart>
      </LoginWrapper>
      <Footer/>
    </Template>
  );
};
import React from 'react';
import {Outlet} from "react-router-dom";
import {Navigation} from "../../components/Navigation/Navigation.jsx";
import styled from "styled-components";
import {Footer} from "../../components/Footer/Footer.jsx";

const Template = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #F5F5F5;
  overflow-y: hidden;
`

const MainContent = styled('div')`
  flex-grow: 1;
  overflow: auto;
`

export const MainLayout = () => {
  return (
    <Template>
      <Navigation />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Template>
  );
};
import styled from "styled-components";
import {AppCard} from "../../components/components.styled.jsx";

export const TariffsWrapper = styled('div')`
  padding-top: 50px;
`
export const TariffsHeader = styled('h2')`
  font-weight: 500;
  text-align: center;
  font-size: 35px;
  margin: 0 0 20px 0;
  padding: 0;
`
export const TariffsDescription = styled('p')`
  padding: 0;
  margin: 0;
  font-size: 24px;
`
export const TariffsBlock = styled('div')`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 40px 0;
`
export const TariffCard = styled(AppCard)`
  background: #F5F5F5;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`
export const TariffTitle = styled('h3')`
  color: ${({ color }) => color };
  text-align: center;
  font-size: 35px;
  margin: 0;
  padding: 0;
`
export const TariffDescription = styled('p')`
  padding: 0;
  margin: 0;
  font-size: 20px;
`
export const TariffPossibilities = styled('ul')`
  padding-left: 20px;
  font-size: 14px;
`
export const Possibility = styled('li')`
  
`
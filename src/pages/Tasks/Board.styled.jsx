import styled from "styled-components";
import {Link} from "react-router-dom";

export const BoardContainer = styled('div')`
  margin: 0 5%;
  height: 100%;
`

export const BoardGrid = styled('section')`
  height: 100%;
  display: grid;
  grid-template: 1fr / repeat(auto-fill, minmax(250px, 300px));
  grid-auto-columns: minmax(300px, 350px);
  gap: 5%;
  overflow-x: auto;
  padding-bottom: 10px;
`

export const BoardColumn = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-column: ${({ column }) => column };
`

export const BoardHeader = styled('h2')`
  padding: 0;
  margin: 12px 0;
  font-size: 24px;
  text-align: center;
`

export const BoardTasks = styled('div')`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const EmployeesHeader = styled('div')`
  display: flex;
  align-items: center;
  margin: 15px 0;
`

export const HeaderLink = styled(Link)`
  color: #000;
  font-size: 18px;
`
import React, { useState } from 'react';
import { BoardColumn, BoardContainer, BoardGrid, BoardHeader, BoardTasks } from "./Board.styled.jsx";
import { BoardTask } from "./components/BoardTask.jsx";
import { tasks } from "../../stubs/index.js";
import { EmployeesHeader, HeaderLink } from "./Board.styled.jsx";

const splitDataToColumns = (arr) => {
  const output = {}
  arr.forEach(task => {
    if (!output[task.columnName]) output[task.columnName] = []

    output[task.columnName].push(task)
  })

  return output
}

export const Board = () => {
  const [columns, setColumns] = useState(3)
  const chunkedData = splitDataToColumns(tasks)

  return (
    <BoardContainer>
      <h1>Проект</h1>
      <EmployeesHeader>
        <HeaderLink to="/edit-board">Создать задачу</HeaderLink>
      </EmployeesHeader>
      <BoardGrid columns={columns}>
        {
          Object.entries(chunkedData).map(([columnName, columnItems], index) => (
            <BoardColumn key={columnName} column={++index}>
              <BoardHeader>{columnName}</BoardHeader>
              <BoardTasks>
                {
                  columnItems.map(task => (
                    <BoardTask key={task.id} title={task.title} expirationDate={task.expirationDate} />
                  ))
                }
              </BoardTasks>
            </BoardColumn>
          ))
        }
      </BoardGrid>
    </BoardContainer>
  );
};
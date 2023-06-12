import React, {useMemo} from 'react';
import {MainContainer} from "../../components/components.styled";
import {EmployeeCard} from "./components/EmployeeCard.jsx";
import {employees} from "../../stubs/index.js";
import {EmployeesColumn, EmployeesGrid, EmployeesHeader, HeaderLink} from "./Employee.styled.jsx";

export const Employees = () => {  
  const chunkedArray = useMemo(() => {
    const middle = Math.floor(employees.length / 2)
    return [
      [...employees.slice(0, middle)],
      [...employees.slice(middle)]
    ]
  }, [])

  return (
    <MainContainer>
      <EmployeesHeader>
        <HeaderLink to="/edit-employee">Создать нового сотрудника</HeaderLink>
      </EmployeesHeader>
      <EmployeesGrid>
        {/* {chunkedArray.map((col, index) => (
          <EmployeesColumn key={index}>
            {col.map(employee => (
              <EmployeeCard key={employee.id} employee={employee}/>
            ))}
          </EmployeesColumn>
        ))} */}
        {employees.map(employee => (
              <EmployeeCard key={employee.id} employee={employee}/>
            ))}
      </EmployeesGrid>
    </MainContainer>
  );
};
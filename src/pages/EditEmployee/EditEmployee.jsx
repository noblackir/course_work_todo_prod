import React, {useEffect, useState} from 'react';
import {UserAvatar} from "../../components/UserAvatar/UserAvatar.jsx";
import {AppInput} from "../../components/AppInput/AppInput";
import {useForm} from "react-hook-form";
import {
  EmployeeWrapper,
  FormAvatarColumn,
  FormButton,
  FormButtonBlock,
  FormCard,
  FormContent
} from "./EditEmployee.styled.jsx";
import {useSearchParams} from "react-router-dom";
import { createdEmployees } from "../../stubs/index.js";

export const EditEmployee = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const emplId = searchParams.get('id') - 1
    if (searchParams.get('id')) {
      setValue('lastName', createdEmployees[emplId].lastName)
      setValue('firstName', createdEmployees[emplId].firstName)
      setValue('surname', createdEmployees[emplId].surname)
      setValue('telephone', createdEmployees[emplId].tel)
      setValue('post', createdEmployees[emplId].post)
      setValue('gender', createdEmployees[emplId].gender)
      setValue('birthdate', createdEmployees[emplId].birthdate)
    }
  }, [searchParams])

  const {register, handleSubmit, setValue} = useForm({
    defaultValues: {
      lastName: '',
      firstName: '',
      surname: '',
      telephone: '+7',
      post: '',
      gender: '',
      birthdate: '',
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <EmployeeWrapper>
      <FormCard>
        <FormAvatarColumn>
          <UserAvatar size={{height: '180px', width: '180px'}}/>
        </FormAvatarColumn>
        <FormContent onSubmit={handleSubmit(onSubmit)}>
          <AppInput id={'lastName'} variant="outside" props={{...register('lastName')}}>Фамилия</AppInput>
          <AppInput id={'firstName'} variant="outside" props={{...register('firstName')}}>Имя</AppInput>
          <AppInput id={'surname'} variant="outside" props={{...register('surname')}}>Отчество</AppInput>
          <AppInput id={'telephone'} variant="outside"
                    props={{...register('telephone'), type: 'tel'}}>Телефон</AppInput>
          <AppInput id={'post'} variant="outside" props={{...register('post')}}>Должность</AppInput>
          <AppInput id={'gender'} variant="outside" props={{...register('gender')}}>Пол</AppInput>
          <AppInput id={'birthdate'} variant="outside"
                    props={{...register('birthdate'), type: 'date'}}>Дата рождения</AppInput>
          <FormButtonBlock>
            <FormButton>Сохранить</FormButton>
          </FormButtonBlock>
        </FormContent>
      </FormCard>
    </EmployeeWrapper>
  );
};
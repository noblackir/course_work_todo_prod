import React, {useEffect, useState} from 'react';
import {UserAvatar} from "../../components/UserAvatar/UserAvatar.jsx";
import {AppInput} from "../../components/AppInput/AppInput";
import {useForm} from "react-hook-form";
import Select from 'react-select';
import {
  EmployeeWrapper,
  FormAvatarColumn,
  FormButton,
  FormButtonBlock,
  FormCard,
  FormContent
} from "./EditBoard.styled.jsx";
import {useSearchParams} from "react-router-dom";
import { createdEmployees } from "../../stubs/index.js";
import { AppSelect } from '../../components/AppSelect/AppSelect.jsx';

export const EditBoard = () => {
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

  const speed = [
    {
      value: 'срочно',
      label: 'срочно'
    },
    {
      value: 'по плану',
      label: 'по плану'
    },
    {
      value: 'отложено',
      label: 'отложено'
    }
  ]

  const harder = [
    {
      value: 'низкий',
      label: 'низкий'
    },
    {
      value: 'средний',
      label: 'средний'
    },
    {
      value: 'высокий',
      label: 'высокий'
    }
  ]


  const onSubmit = (data) => {
    console.log(data)
  }

  const [currentHarder, setCurrentHarder] = useState('высокий');
  const [currentSpeed, setCurrentSpeed] = useState('отложено');

  const getValue = () => {
    return currentHarder ? harder.find(c => c.value === currentHarder) : ''
  }
  const onChange = (newValue) => {
    setCurrentHarder(newValue.value);
  }
  const getValueS = () => {
    return currentSpeed ? speed.find(c => c.value === currentSpeed) : ''
  }
  const onChangeS = (newValue) => {
    setCurrentSpeed(newValue.value);
  }

  const colourStyles = {
    control: styles => ({ ...styles, 'box-shadow': '0 4px 4px rgba(0, 0, 0, 0.25)'})}

    return (
        <EmployeeWrapper>
          <FormCard>
            <FormContent onSubmit={handleSubmit(onSubmit)}>
              <AppInput id={'lastName'} variant="outside" props={{...register('lastName')}}>Название</AppInput>
              <AppInput id={'firstName'} variant="outside" props={{...register('firstName')}}>Описание</AppInput>
              <AppInput id={'surname'} variant="outside" props={{...register('surname')}}>Отчество</AppInput>
              <AppSelect>
                Уровень сложности
                <Select onChange={onChange} value={getValue()} options = {harder} styles={colourStyles}></Select>
              </AppSelect>
              <AppSelect>
                Скорость выполнения
                <Select onChange={onChangeS} value={getValueS()} options = {speed} styles={colourStyles}></Select>
              </AppSelect>
              <FormButtonBlock>
                <FormButton>Сохранить</FormButton>
              </FormButtonBlock>
            </FormContent>
          </FormCard>
        </EmployeeWrapper>
      );
    };
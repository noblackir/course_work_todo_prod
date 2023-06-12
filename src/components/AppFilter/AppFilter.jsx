import React from 'react';
import { AppInput } from "../../components/AppInput/AppInput";
import { AppButton } from '../AppButton/AppButton';
import { AppSelect } from '../AppSelect/AppSelect';
import MySelect from '../MySelect/MySelect';

const AppFilter = ({ filter, setFilter, fetchProjects }) => {
    return (
        <div className='game_filter'>
            <div>
                <AppButton onClick={fetchProjects}>GetGames</AppButton>
            </div>
            <AppInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Введите название" />
            <MySelect
                defaultValue={'По умолчанию'}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                value={filter.sort} options={[
                    { value: 'title', title: 'По названию' },
                    { value: 'description', title: 'По описанию' }
                ]}></MySelect>
        </div>
    )
}

export default AppFilter
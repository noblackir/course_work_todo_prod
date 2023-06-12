import React from 'react'
import { getPagesArray } from '../../stubs/pages';
import { AppButton } from '../AppButton/AppButton';
import classes from '../Pagination/MyPaginate.module.css'

const MyPaginate = ({ totalPages, page, changePage }) => {
  let PagesArray = getPagesArray(totalPages);
  return (
    <div className='page_wrapper'>
      {
        PagesArray.map(p =>
          <AppButton
            onClick={() => changePage(p)}
            key={p}
            className={page == p ? 'page_wrapper__page page__current' : 'page_wrapper__page'}
          >{p+1}
          </AppButton>
        )
      }
    </div>
  )
}

export default MyPaginate
import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

function LoanPage() {
  return (
    <Fragment>
        <Outlet />
    </Fragment>
  )
}

export default LoanPage

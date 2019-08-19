import React from 'react'
import moment from 'moment'
import * as materialUi from '@material-ui/core'

import "./Child.css"

const Child = () => {
  const Button = materialUi.Button
  return(
    <>
    <p>Child {moment(Date.now()).format('DD.MM.YYYY')}</p>
    <img src="./sortsa.jpg" alt="Sortsa" className={"soran-parta"}/>
    </>
  )
}

export default Child

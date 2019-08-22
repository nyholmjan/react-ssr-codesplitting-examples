import React from 'react'
import moment from 'moment'
import * as materialUi from '@material-ui/core'

import "./Sortsa.css"

const Sortsa = () => {
  const Button = materialUi.Button
  return(
    <>
    <p>{moment(Date.now()).format('DD.MM.YYYY')}</p>
    <img src="sortsa.jpg" alt="Sortsa" className={"soran-parta"}/>
    </>
  )
}

export default Sortsa

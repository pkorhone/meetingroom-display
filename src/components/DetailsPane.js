import React from 'react'
import './DetailsPane.css'
import CalendarView from './CalendarView'

const DetailsPane = (props) => {
  return (
    <div>
      <h2>TODAY'S CALENDAR</h2>
      <h3>Or</h3>
      <h2>EVENT DETAILS</h2>
      <CalendarView />
    </div>
  )
}

export default DetailsPane
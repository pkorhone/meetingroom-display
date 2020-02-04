import React, { useState } from 'react'
import './DetailsPane.css'
import CalendarView from './CalendarView'

const DetailsPane = (props) => {

  const [selectedEvent, setSelectedEvent] = useState(null)

  const onSelectEvent = (event) => {
    console.log(event)
    setSelectedEvent(event)
  }

  const printSelected = () => {
    console.log(selectedEvent)
  }

  const onReturnToCalendar = () => {
    setSelectedEvent(null)
  }

  return (
    <div className='detailsPane'>
      <h2>TODAY'S CALENDAR</h2>
      <h3>Or</h3>
      <h2>EVENT DETAILS</h2>
      <button onClick={() => onReturnToCalendar()}>back to calendar</button>
      <button onClick={() => printSelected()}>print selected event</button>
      <CalendarView onSelectEvent={onSelectEvent} />
    </div>
  )
}

export default DetailsPane
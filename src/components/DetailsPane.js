import React, { useState } from 'react'
import './DetailsPane.css'
import CalendarView from './CalendarView'
import EventDetailsView from './EventDetailsView'

const DetailsPane = (props) => {

  const [selectedEvent, setSelectedEvent] = useState(null)

  const weekdays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const onSelectEvent = (event) => {
    console.log(event)
    setSelectedEvent(event)
  }

  const onReturnToCalendar = () => {
    setSelectedEvent(null)
  }

  return (
    <div className='detailsPane'>
      {selectedEvent === null ? 
        <CalendarView onSelectEvent={onSelectEvent} /> :
        <EventDetailsView event={selectedEvent} onReturnToCalendar={onReturnToCalendar} />
      }
    </div>
  )
}

export default DetailsPane
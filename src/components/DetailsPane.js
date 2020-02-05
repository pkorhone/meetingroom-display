import React, { useState } from 'react'
import './DetailsPane.css'
import CalendarView from './CalendarView'
import EventDetailsView from './EventDetailsView'

const DetailsPane = ({ meetings }) => {

  const [selectedEvent, setSelectedEvent] = useState(null)

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
        <CalendarView onSelectEvent={onSelectEvent} meetings={meetings} /> :
        <EventDetailsView event={selectedEvent} onReturnToCalendar={onReturnToCalendar} />
      }
    </div>
  )
}

export default DetailsPane
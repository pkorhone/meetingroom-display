import React, { useState } from 'react'
import './DetailsPane.css'
import CalendarView from './CalendarView'
import EventDetailsView from './EventDetailsView'

const DetailsPane = ({ meetings }) => {

  const [selectedMeeting, setSelectedMeeting] = useState(null)

  const onSelectMeeting = (meeting) => {
    console.log(meeting)
    setSelectedMeeting(meeting)
  }

  const onReturnToCalendar = () => {
    setSelectedMeeting(null)
  }

  return (
    <div className='detailsPane'>
      {selectedMeeting === null ? 
        <CalendarView onSelectMeeting={onSelectMeeting} meetings={meetings} /> :
        <EventDetailsView meeting={selectedMeeting} onReturnToCalendar={onReturnToCalendar} />
      }
    </div>
  )
}

export default DetailsPane
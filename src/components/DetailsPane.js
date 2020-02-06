import React from 'react'
import CalendarView from './CalendarView'
import EventDetailsView from './EventDetailsView'
import './DetailsPane.css'

const DetailsPane = ({ meetings, selectedMeeting, onSelectMeeting, onReturnToCalendar }) => {

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
import React from 'react'
import './EventDetailsView.css'
import Detail from './Detail'

const EventDetailsView = ({ event, onReturnToCalendar }) => {
  return (
    <div>
      <div className='eventTitleBar'>
        <div className='backButton' onClick={() => onReturnToCalendar()}>
          <p>X</p>
        </div>
        <div className='eventTitle'>
          <p>{event.title}</p>
        </div>
      </div>

      <Detail title={event.start.getDay()}/>
      <Detail title='start time'/>
      <Detail title='Participants' />
      <Detail title='Description'/>
    </div>
  )
}

export default EventDetailsView
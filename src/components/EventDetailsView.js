import React from 'react'
import './EventDetailsView.css'
import Detail from './Detail'

const EventDetailsView = ({ event, onReturnToCalendar }) => {

  const weekdays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const eventDate = () => {
    const startDate = `${event.start.getDate()}.${event.start.getMonth()+1}.${event.start.getFullYear()}`
    const endDate = `${event.end.getDate()}.${event.end.getMonth()+1}.${event.end.getFullYear()}`

    if (startDate === endDate) {
      // case 1: event starts and ends on the same day
      return `${weekdays[event.start.getDay()]}, ${startDate}`
    }
    // case 2: event spans two days or more
    return `${weekdays[event.start.getDay()]}, ${startDate} - \n${weekdays[event.end.getDay()]}, ${endDate}`
  }


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

      <Detail title={eventDate()}/>
      <Detail title='start time'/>
      <Detail title='Participants' />
      <Detail title='Description'/>
    </div>
  )
}

export default EventDetailsView
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

  const startDate = `${event.start.getDate()}.${event.start.getMonth()+1}.${event.start.getFullYear()}`
  const endDate = `${event.end.getDate()}.${event.end.getMonth()+1}.${event.end.getFullYear()}`
  
  const singleDayEvent = () => {
    //returns true if event starts and ends on the same date.
    return startDate === endDate
  }

  const eventDate = () => {
    if (singleDayEvent()) {
      // case 1: event starts and ends on the same day
      return `${weekdays[event.start.getDay()]}, ${startDate}`
    }
    // case 2: event spans two days or more
    return `${weekdays[event.start.getDay()]}, ${startDate} - \n${weekdays[event.end.getDay()]}, ${endDate}`
  }

  const eventLength = () => {
    const timeString = (time) => {
      const hrs = time.getHours() === 0 ? '00' : time.getHours()
      const mins = time.getMinutes() === 0 ? '00' : time.getMinutes()
      return(hrs + '.' + mins)
    }
  
    const startTime = timeString(event.start)
    const endTime = timeString(event.end)

    if (singleDayEvent()) {
      // case 1: event starts and ends on the same day
      return `${startTime} to ${endTime}`
    }
    // case 2: event spans two days or more
    return `${weekdays[event.start.getDay()]} ${startTime} to ${weekdays[event.end.getDay()]} ${endTime}`
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
      <Detail title={eventLength()}/>
      <Detail title='Participants' />
      <Detail title='Description'/>
    </div>
  )
}

export default EventDetailsView
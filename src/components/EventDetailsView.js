import React from 'react'
import './EventDetailsView.css'
import Detail from './Detail'

const EventDetailsView = ({ meeting, onReturnToCalendar }) => {

  const weekdays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const startDateObj = new Date(meeting.StartTime)
  const endDateObj = new Date(meeting.EndTime)

  const startDate = `${startDateObj.getDate()}.${startDateObj.getMonth()+1}.${startDateObj.getFullYear()}`
  const endDate = `${endDateObj.getDate()}.${endDateObj.getMonth()+1}.${endDateObj.getFullYear()}`
  
  const singleDayEvent = () => {
    //returns true if event starts and ends on the same date.
    return startDate === endDate
  }

  const eventDate = () => {
    if (singleDayEvent()) {
      // case 1: event starts and ends on the same day
      return `${weekdays[startDateObj.getDay()]}, ${startDate}`
    }
    // case 2: event spans two days or more
    return `${weekdays[startDateObj.getDay()]}, ${startDate} - \n${weekdays[endDateObj.getDay()]}, ${endDate}`
  }

  const eventLength = () => {
    const timeString = (time) => {
      const hrs = time.getHours() === 0 ? '00' : time.getHours()
      const mins = time.getMinutes() === 0 ? '00' : time.getMinutes()
      return(hrs + '.' + mins)
    }
  
    const startTime = timeString(startDateObj)
    const endTime = timeString(endDateObj)

    if (singleDayEvent()) {
      // case 1: event starts and ends on the same day
      return `${startTime} to ${endTime}`
    }
    // case 2: event spans two days or more
    return `${weekdays[startDateObj.getDay()]} ${startTime} to ${weekdays[endDateObj.getDay()]} ${endTime}`
  }


  return (
    <div>
      <div className='eventTitleBar'>
        <div className='backButton' onClick={() => onReturnToCalendar()}>
          <p>X</p>
        </div>
        <div className='eventTitle'>
          <p>{meeting.Subject}</p>
        </div>
      </div>

      <Detail title={eventDate()} />
      <Detail title={eventLength()} />
      {/* optional properties Participants & Description only rendered if present */}
      {!meeting.hasOwnProperty('Participants') || meeting.Participants === null ? null : <Detail title='Participants' type='collapse' content={meeting.Participants}/> }
      {!meeting.hasOwnProperty('Description') || meeting.Description === null ? null : <Detail title='Description' type='show' content={meeting.Description}/> }
    </div>
  )
}

export default EventDetailsView
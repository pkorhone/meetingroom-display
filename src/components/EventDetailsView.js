import React from 'react'
import './EventDetailsView.css'
import Detail from './Detail'
import { Icon } from 'semantic-ui-react'
import clockIcon from '../icons/time.png'
import personIcon from '../icons/person.png'
import descIcon from '../icons/description.png'

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

  // parse meeting start & end from JSON data to Date objects
  const startDateObj = new Date(meeting.StartTime)
  const endDateObj = new Date(meeting.EndTime)


  // get presentable dates in format DD.MM.YYYY
  const startDate = `${startDateObj.getDate()}.${startDateObj.getMonth()+1}.${startDateObj.getFullYear()}`
  const endDate = `${endDateObj.getDate()}.${endDateObj.getMonth()+1}.${endDateObj.getFullYear()}`
  

  const singleDayEvent = () => {
    //returns true if event starts and ends on the same date.
    return startDate === endDate
  }

  // get event date for display in event details (e.g. "Thursday, 6.2.2020")
  const eventDate = () => {
    if (singleDayEvent()) {
      // case 1: event starts and ends on the same day
      return `${weekdays[startDateObj.getDay()]}, ${startDate}`
    }
    // case 2: event spans two days or more
    return `${weekdays[startDateObj.getDay()]}, ${startDate} - \n${weekdays[endDateObj.getDay()]}, ${endDate}`
  }

  // get event length for display in event details (e.g. "9.30 to 10.30")
  const eventLength = () => {
    
    // helper method to get presentable time label (format HH.MM)
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
          <Icon inverted name='chevron left' size='large'/>
        </div>
        <div className='eventTitle'>
          <h3>{meeting.Subject}</h3>
        </div>
      </div>

      <Detail title={eventDate().toUpperCase()} icon={clockIcon}/>
      <Detail title={eventLength().toUpperCase()} icon={clockIcon}/>
      {/* optional properties Participants & Description only rendered if present */}
      {!meeting.hasOwnProperty('Participants') || meeting.Participants === null ? null : <Detail title='PARTICIPANTS' type='collapse' content={meeting.Participants} icon={personIcon}/> }
      {!meeting.hasOwnProperty('Description') || meeting.Description === null ? null : <Detail title='DESCRIPTION' type='show' content={meeting.Description} icon={descIcon} /> }
    </div>
  )
}

export default EventDetailsView
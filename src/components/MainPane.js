import React, { useState, useEffect } from 'react'
import moment from 'moment'
import CurrentMeeting from './CurrentMeeting'
import NextMeetings from './NextMeetings'
import './MainPane.css'

const MainPane = ({ meetings }) => {

  const [currentMeeting, setCurrentMeeting] = useState(null)
  const now = moment()._d

  useEffect(() => {
    meetings.forEach(meeting => {
      if (eventInProgress(meeting)) {
        setCurrentMeeting(meeting)
      }
    })
  }, [])

  const eventInProgress = (event) => {
    const startTime = new Date(event.StartTime)
    const endTime = new Date(event.EndTime)
    const hasStarted = startTime < now
    const hasEnded = endTime < now

    if (hasStarted && !hasEnded) {
      // event has started but has not yet ended
      return true
    }
    // any other case
    return false
  }

  return (
    <div className='mainPane'>
      <CurrentMeeting currentMeeting={currentMeeting}/>
      <NextMeetings meetings={meetings}/>
    </div>
  )
}

export default MainPane
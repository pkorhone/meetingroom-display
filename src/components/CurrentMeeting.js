import React, { useState, useEffect } from 'react'
import moment from 'moment'
import './CurrentMeeting.css'

const CurrentMeeting = ({ meetings }) => {

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
    <div className="main">
      {currentMeeting === null ?
        <h3 className='subTitle'>MEETING ROOM AVAILABLE!</h3> :
        <>
          <h3 className='subTitle'>CURRENT MEETING</h3>
          <h1 className='hugeTitle'>{currentMeeting.Subject.toUpperCase()}</h1>
          <p>| ---------------- Timeline here ---------------- |</p>
          <h3 className='subTitle'>{currentMeeting.Organizer.toUpperCase()}</h3>
        </>
      }
    </div>
  )
}

export default CurrentMeeting
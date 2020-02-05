import React, { useState, useEffect } from 'react'
import moment from 'moment'
import CurrentMeeting from './CurrentMeeting'
import NextMeetings from './NextMeetings'
import './MainPane.css'

const MainPane = ({ meetings }) => {

  const [currentMeeting, setCurrentMeeting] = useState(null)
  const [nextMeetings, setNextMeetings] = useState([])
  const now = new Date(moment()._d)

  useEffect(() => {
    meetings.forEach(meeting => {
      if (eventInProgress(meeting)) {
        setCurrentMeeting(meeting)
      }
    })
    findNextMeetings()
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

  const eventStartsLater = (event) => {
    const startTime = new Date(event.StartTime)
    if (startTime > now) {
      // event starts later
      return true
    }
    // event has already started
    return false
  }

  const findNextMeetings = () => {
    // find all meetings in the future and sort by start time
    const futureMeetings = meetings.filter(meeting => !eventInProgress(meeting) && eventStartsLater(meeting))
    futureMeetings.sort((a, b) => new Date(a.StartTime) - new Date(b.StartTime))
    // only show the next 3 upcoming meetings
    const nextThree = futureMeetings.filter((meeting, index, array) => index < 3)
    setNextMeetings(nextThree)
  }

  return (
    <div className='mainPane'>
      <CurrentMeeting currentMeeting={currentMeeting}/>
      <NextMeetings nextMeetings={nextMeetings}/>
    </div>
  )
}

export default MainPane
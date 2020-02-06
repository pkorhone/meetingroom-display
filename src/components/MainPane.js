import React, { useState, useEffect } from 'react'
import moment from 'moment'
import CurrentMeeting from './CurrentMeeting'
import NextMeetings from './NextMeetings'
import './MainPane.css'

const MainPane = ({ meetings, onSelectMeeting }) => {

  const [currentMeeting, setCurrentMeeting] = useState(null)
  const [nextMeetings, setNextMeetings] = useState([])
  const now = new Date(moment()._d)

  useEffect(() => {
    // find currently ongoing meeting
    meetings.forEach(meeting => {
      if (eventInProgress(meeting)) {
        setCurrentMeeting(meeting)
      }
    })

    //find upcoming meetings (max. 3)
    findNextMeetings()
  }, [])

  const findNextMeetings = () => {
    // find all meetings in the future and sort by start time
    const futureMeetings = meetings.filter(meeting => !eventInProgress(meeting) && eventStartsLater(meeting))
    futureMeetings.sort((a, b) => new Date(a.StartTime) - new Date(b.StartTime))
    // only show the next 3 upcoming meetings
    const nextThree = futureMeetings.filter((meeting, index, array) => index < 3)
    setNextMeetings(nextThree)
  }


  // check if event is in progress
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

  
  // check if event start time is in the future
  const eventStartsLater = (event) => {
    const startTime = new Date(event.StartTime)
    if (startTime > now) {
      // event starts later
      return true
    }
    // event has already started
    return false
  }

  return (
    <div className='mainPane'>
      <CurrentMeeting currentMeeting={currentMeeting}/>
      <NextMeetings nextMeetings={nextMeetings} onSelectMeeting={onSelectMeeting}/>
    </div>
  )
}

export default MainPane
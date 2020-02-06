import React from 'react'
import CurrentProgress from './CurrentProgress'
import './CurrentMeeting.css'

const CurrentMeeting = ({ currentMeeting }) => {

  return (
    <div className="currentMeeting">
      {currentMeeting === null ?

        // case 1: no current meeting, the meeting room is available
        <h3 className='subTitle'>MEETING ROOM AVAILABLE!</h3> :

        // case 2: there is a meeting in progress, show meeting details
        <>
          <h3 className='subTitle'>CURRENT MEETING</h3>
          <hr />
          <h1 className='hugeTitle'>{currentMeeting.Subject.toUpperCase()}</h1>
          <CurrentProgress start={currentMeeting.StartTime} end={currentMeeting.EndTime}/>
          <h3 className='subTitle'>{currentMeeting.Organizer.toUpperCase()}</h3>
        </>
      }
    </div>
  )
}

export default CurrentMeeting
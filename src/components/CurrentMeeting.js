import React from 'react'
import './CurrentMeeting.css'

const CurrentMeeting = ({ currentMeeting }) => {

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
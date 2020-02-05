import React from 'react'
import CurrentMeeting from './CurrentMeeting'
import NextMeetings from './NextMeetings'
import './MainPane.css'

const MainPane = ({ meetings }) => {
  return (
    <div className='mainPane'>
      <CurrentMeeting meetings={meetings}/>
      <NextMeetings meetings={meetings}/>
    </div>
  )
}

export default MainPane
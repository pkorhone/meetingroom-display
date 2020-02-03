import React from 'react'
import CurrentMeeting from './CurrentMeeting'
import NextMeetings from './NextMeetings'
import './MainPane.css'

const MainPane = (props) => {
  return (
    <div className='mainPane'>
      <CurrentMeeting />
      <NextMeetings />
    </div>
  )
}

export default MainPane
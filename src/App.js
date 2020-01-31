import React from 'react'
import './App.css'
import CurrentMeeting from './components/CurrentMeeting'
import NextMeetings from './components/NextMeetings'

function App() {
  return (
    <div>
      <CurrentMeeting />
      <NextMeetings />
    </div>
  )
}

export default App

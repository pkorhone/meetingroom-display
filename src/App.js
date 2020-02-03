import React from 'react'
import './App.css'
import CurrentMeeting from './components/CurrentMeeting'
import NextMeetings from './components/NextMeetings'
import DetailsPane from './components/DetailsPane'

function App() {
  return (
    <div className="container">

      <div style={{
        flexGrow: 1,
      }}>
        <DetailsPane />
      </div>

      <div style={{
        flexGrow: 3,
      }}>
        <CurrentMeeting />
        <NextMeetings />
      </div>

    </div>
  )
}

export default App

import React, { useState } from 'react'
import './App.css'
import DetailsPane from './components/DetailsPane'
import MainPane from './components/MainPane'
import meetings from './data/meetings.json'

function App() {

  const [selectedMeeting, setSelectedMeeting] = useState(null)

  const onSelectMeeting = (meeting) => {
    setSelectedMeeting(meeting)
  }

  const onReturnToCalendar = () => {
    setSelectedMeeting(null)
  }

  return (
    <div className="container">
      <MainPane 
        meetings={meetings}
        onSelectMeeting={onSelectMeeting}
      />
      <DetailsPane 
        meetings={meetings}
        selectedMeeting={selectedMeeting}
        onSelectMeeting={onSelectMeeting}
        onReturnToCalendar={onReturnToCalendar}
      />
    </div>
  )
}

export default App

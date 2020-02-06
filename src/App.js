import React from 'react'
import './App.css'
import DetailsPane from './components/DetailsPane'
import MainPane from './components/MainPane'
import meetings from './data/meetings.json'

function App() {

  return (
    <div className="container">
      <MainPane meetings={meetings}/>
      <DetailsPane meetings={meetings} />
    </div>
  )
}

export default App

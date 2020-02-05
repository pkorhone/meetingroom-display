import React from 'react'
import './App.css'
import DetailsPane from './components/DetailsPane'
import MainPane from './components/MainPane'
import meetings from './data/meetings.json'

function App() {

  return (
    <div className="container">
      <DetailsPane meetings={meetings} />
      <MainPane meetings={meetings}/>
    </div>
  )
}

export default App

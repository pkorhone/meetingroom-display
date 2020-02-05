import React from 'react'
import { Progress } from 'semantic-ui-react'
import moment from 'moment'
import './CurrentProgress.css'

const CurrentProgress = ({ start, end }) => {

  const startTime = new Date(start)
  const endTime = new Date(end)
  const now = new Date(moment()._d)

  const timeString = (time) => {
    const hrs = time.getHours() === 0 ? '00' : time.getHours()
    const mins = time.getMinutes() === 0 ? '00' : time.getMinutes()
    return(hrs + '.' + mins)
  }

  const progress = (now.valueOf()-startTime.valueOf()) / (endTime.valueOf()-startTime.valueOf()) * 100

  return (
    <div className='progressContainer'>
      <div className='timeLabel'>
        <h3>{timeString(startTime)}</h3>
      </div>
      <div className='progressBar'>
        <Progress percent={ progress } color='yellow' size='tiny' />
      </div>
      <div className='timeLabel'>
        <h3>{timeString(endTime)}</h3>
      </div>
      
    </div>
  )
}

export default CurrentProgress
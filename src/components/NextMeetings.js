import React from 'react'
import './NextMeetings.css'

const NextMeetings = ({ nextMeetings, onSelectMeeting }) => {

  return (
    <div>
      <div className='nextMeetings'>
        <div className='nextMeetingsBackground'></div>
        {nextMeetings.length === 0 ? 
          null :
          nextMeetings.map(meeting => 
            <div className='nextMeeting'
              key={meeting.StartTime + meeting.Subject}
              onClick={() => onSelectMeeting(meeting)}
            >
              <h3>{meeting.StartTime.substring(11,16)} - {meeting.EndTime.substring(11,16)}</h3>
              <h2>{meeting.Subject}</h2>
              <h3>{meeting.Organizer.toUpperCase()}</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NextMeetings
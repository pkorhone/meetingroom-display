import React from 'react'

const NextMeetings = ({ nextMeetings }) => {

  console.log(nextMeetings)

  return (
    <div>
      <div>
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap"
        }}>
          {nextMeetings.length === 0 ? 
            null :
            nextMeetings.map(meeting => 
              <div
                style={{
                  textAlign:"left", 
                  flexBasis:180,
                  flexGrow:1,
                  padding:10,
                  border:"2px solid"
                }}
                
                key={meeting.StartTime + meeting.Subject}
              >
                <p>{meeting.StartTime.substring(11,16)} - {meeting.EndTime.substring(11,16)}</p>
                <p><b>{meeting.Subject}</b></p>
                <p>{meeting.Organizer.toUpperCase()}</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default NextMeetings
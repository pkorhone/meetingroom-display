import React from 'react'

const NextMeetings = (props) => {

  const meetings = [
    {
      subject: "Jooses Design workshop",
      organizer: "Joose Rautemaa",
      startTime: "2018-03-03T09:30:00",
      endTime: "2018-03-03T10:30:00",
      participants: null
    },
    {
      subject: "Joose goes sickbr0",
      organizer: "Joose Rautemaa",
      startTime: "2018-03-03T10:30:00",
      endTime: "2018-03-03T11:30:00",
      participants: null
    },
    {
      subject: "Nousiainen Inspection",
      organizer: "Joose Rautemaa",
      startTime: "2018-03-03T11:30:00",
      endTime: "2018-03-03T13:30:00",
      participants: null
    }
  ]

  return (
    <div>
      <div>
        <div style={{
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap"
        }}>
          {meetings.map(meeting => 
            <div
              style={{
                textAlign:"left", 
                flexBasis:180,
                flexGrow:1,
                backgroundColor:"gray",
                padding:10,
                border:"2px solid"
              }}
              
              key={meeting.startTime}
            >
              <p>{meeting.startTime.substring(11,16)} - {meeting.endTime.substring(11,16)}</p>
              <p><b>{meeting.subject}</b></p>
              <p>{meeting.organizer.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NextMeetings
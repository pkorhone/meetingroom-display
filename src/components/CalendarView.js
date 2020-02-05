import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fi'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarView.css'

const CalendarView = ({ onSelectEvent, meetings }) => {

  const calendarEvents = meetings.map(meeting => {
    return {
      title: meeting.Subject,
      start: new Date(meeting.StartTime),
      end: new Date(meeting.EndTime)
    }
  })

  moment.locale('fi')
  const localizer = momentLocalizer(moment)

  return (
    <div>
      <small>CONFERENCE ROOM</small>
      <h1>DATE</h1>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        toolbar={false}
        showMultiDayTimes={true}
        defaultView='day'
        onSelectEvent={(e) => onSelectEvent(e)}
      />
    </div>
  )
}

export default CalendarView
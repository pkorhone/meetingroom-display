import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fi'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarView.css'

const CalendarView = ({ onSelectMeeting, meetings }) => {

  moment.locale('fi')
  const localizer = momentLocalizer(moment)

  return (
    <div>
      <small>CONFERENCE ROOM</small>
      <h1>DATE</h1>
      <Calendar
        localizer={localizer}
        events={meetings}
        titleAccessor={'Subject'}
        startAccessor={(meeting) => new Date(meeting.StartTime)}
        endAccessor={(meeting) => new Date(meeting.EndTime)}
        toolbar={false}
        showMultiDayTimes={true}
        defaultView='day'
        onSelectEvent={(meeting) => onSelectMeeting(meeting)}
      />
    </div>
  )
}

export default CalendarView
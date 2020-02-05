import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fi'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarView.css'

const CalendarView = (props) => {

  const events = [
    {
      title: 'Test Event 1',
      start: new Date('2020-02-05T08:30:00'),
      end: new Date('2020-02-05T10:30:00')
    },
    {
      title: 'Test Event 2',
      start: new Date('2020-02-05T13:00:00'),
      end: new Date('2020-02-05T14:00:00')
    },
    {
      title: 'Test Event 3',
      start: new Date('2020-02-05T16:00:00'),
      end: new Date('2020-02-05T18:00:00')
    },
    {
      title: 'Overnight event',
      start: new Date('2020-02-05T20:00:00'),
      end: new Date('2020-02-06T11:00:00')
    },
  ]

  moment.locale('fi')
  const localizer = momentLocalizer(moment)

  return (
    <div>
      <small>CONFERENCE ROOM</small>
      <h1>DATE</h1>
      <Calendar
        localizer={localizer}
        events={events}
        toolbar={false}
        showMultiDayTimes={true}
        defaultView='day'
        onSelectEvent={(e) => props.onSelectEvent(e)}
      />
    </div>
  )
}

export default CalendarView
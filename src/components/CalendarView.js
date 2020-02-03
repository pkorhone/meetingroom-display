import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/en-gb'
import 'moment/locale/fi'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarView.css'

const CalendarView = (props) => {

  const events = [
    {
      title: 'Test Event 1',
      start: new Date('2020-02-03T08:30:00'),
      end: new Date('2020-02-03T10:30:00')
    },
    {
      title: 'Test Event 2',
      start: new Date('2020-02-03T13:00:00'),
      end: new Date('2020-02-03T14:00:00')
    },
    {
      title: 'Test Event 3',
      start: new Date('2020-02-03T16:00:00'),
      end: new Date('2020-02-03T18:00:00')
    }
  ]

  moment.locale('en-gb')
  const localizer = momentLocalizer(moment)

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        toolbar={false}
        defaultView='day'
      />
    </div>
  )
}

export default CalendarView
import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/fi'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './CalendarView.css'

const CalendarView = ({ onSelectMeeting, meetings }) => {

  moment.locale('fi')
  const localizer = momentLocalizer(moment)

  const Event = ({ event }) => {
    return (
      <div className='eventCard'>
        <h2>{event.Subject}</h2>
        <h3>{event.Organizer.toUpperCase()}</h3>
      </div>
    )
  }

  return (
    <div className='calendarContainer'>
      <div className='roomTitle' style={{height:'10vh'}}>
        <h3>CONFERENCE ROOM</h3>
        <h2>{moment().format('dddd LL').toUpperCase()}</h2>
      </div>
      <div>
        <Calendar
          components={{
            event: Event
          }}
          localizer={localizer}
          events={meetings}
          titleAccessor={'Subject'}
          startAccessor={(meeting) => new Date(meeting.StartTime)}
          endAccessor={(meeting) => new Date(meeting.EndTime)}
          toolbar={false}
          showMultiDayTimes={true}
          views={['day']}
          defaultView='day'
          step={15}
          timeslots={2}
          scrollToTime={new Date(moment().subtract(1.5, 'hour').format())}
          onSelectEvent={(meeting) => onSelectMeeting(meeting)}
          style={{height:'85vh'}}
        />
      </div>
    </div>
  )
}

export default CalendarView
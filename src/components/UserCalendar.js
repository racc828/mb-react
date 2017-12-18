import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import EventsAdapter from '../adapters/EventsAdapter'

BigCalendar.momentLocalizer(moment);

export default class UserCalendar extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state ={
      events: []
    }
  }

  componentDidMount() {
    EventsAdapter.getEvents()
    .then((data) => {
      this.setState({
        events: data
      })
    })
  }

  eventStyleGetter = (event, start, end, isSelected) => {
      var backgroundColor = "#35b44b";
      var style = {
          backgroundColor: backgroundColor,
          borderRadius: '0px',
          opacity: 0.8,
          color: '#fff',
          border: '0px',
          display: 'block'
      };
      return {
          style: style
      };
  }


  render() {
    return(
    <div className="calendar-outter-container">
        <div className="calendar-inner-container">
          <BigCalendar
           popup
           selectable
           tep={60}
           culture='en-GB'
           eventPropGetter={(this.eventStyleGetter)}
           events={this.state.events}
           views={['month']}/>
         </div>
       </div>

    )
  }
}

import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Modal, {closeStyle} from 'simple-react-modal'
import AddEvent from './AddEvent'
import EventsAdapter from '../adapters/EventsAdapter'
import EditEvent from './EditEvent'

BigCalendar.momentLocalizer(moment);

export default class AdminCalendar extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state ={
      events: [],
      addEventModal: false,
      editEventModal: false
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

  renderEditEvent = (data) => {
    this.setState({
      editEventModal: true,
      eventData: data
    })
  }

  renderAddEvent = (data) => {
    this.setState({
      addEventModal: true,
      eventData: data
    })
  }

  addEvent = (event, start, end) => {
    debugger
     EventsAdapter.addEvent(event,start, end)
     .then((data) => {
       this.setState({
         addEventModal: false,
         eventData: null,
         events: [...this.state.events, data]
       })
     })
   }

   editEventTitle = (newTitle, eventId) => {
     EventsAdapter.editEventTitle(newTitle, eventId)
     .then((data) => {
       let index = this.state.events.findIndex(event=> event.id === data.id)
       this.setState({
         events: [
          ...this.state.events.slice(0,index),
          Object.assign({}, this.state.events[index], data),
          ...this.state.events.slice(index+1)
        ],
        eventData: data
      });
     })
   }

   deleteEvent = (eventId) => {
    EventsAdapter.deleteEvent(eventId)
    .then((data) => {
      this.setState({
        editeventModal:false,
        events: data
      })
    })
  }

  close = () => {
    this.setState({
      addEventModal:false,
      editEventModal:false,
      eventData: null
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
          <h5>Welcome {this.props.currentUser.firstname}</h5>
          <p>Add events to the calendar by clicking on an empty day on the <br/> calendar. Edit an event after you have created it, by clicking on the<br/> event when it appears on the calendar. </p>
          {this.state.addEventModal ?
               <Modal
                 closeOnOuterClick={true}
                 show={this.state.addEventModal}
                 onClose={this.close}
                 style={{background: 'rgba(0,0,0, .4)'}}
                 // containerStyle={{width: ''}}
                  >
                  <AddEvent  eventData={this.state.eventData} addEvent={this.addEvent} close={this.close} />
               </Modal>
                 : null}
                 {this.state.editEventModal ?
                  <Modal
                    closeOnOuterClick={true}
                    show={this.state.editEventModal}
                    onClose={this.close}
                    style={{background: 'rgba(0,0,0, .4)'}}>
                      <EditEvent deleteEvent={this.deleteEvent} editEventTitle={this.editEventTitle} close={this.close} eventData={this.state.eventData}  />
                  </Modal> :
                  null}
          <BigCalendar
           popup
           eventPropGetter={(this.eventStyleGetter)}
           selectable
           tep={60}
           culture='en-GB'
           onSelectEvent={this.renderEditEvent}
           onSelectSlot={this.renderAddEvent}
           events={this.state.events}
           views={['month']}/>
         </div>
       </div>
    )
  }
}

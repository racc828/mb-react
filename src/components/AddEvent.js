import React from 'react'
import AddEventForm from './AddEventForm'

export default class AddEvent extends React.Component {
  render() {
    return(
      <div>
        <div className="modal-header">
           <i className="fa fa-times float-right-times" onClick={this.props.close}></i>
           <h5> Add Event </h5>
         </div>
         <div className="form-container">
           <AddEventForm eventData={this.props.eventData} addEvent={this.props.addEvent} />
         </div>
      </div>
    )
  }
}

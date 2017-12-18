import React from 'react'
import EditEventForm from './EditEventForm'

export default class EditEvent extends React.Component {


  deleteEvent = () => {
    debugger
    this.props.deleteEvent(this.props.eventData.id)
    this.props.close()
  }

  render() {
    return(
      <div>
        <div className="modal-header">
           <i className="fa fa-times float-right-times" onClick={this.props.close}></i>
           <h5> Edit Event </h5>
         </div>
         <div className="form-container">
            <i onClick={this.deleteEvent} className="fa fa-trash trash-right"></i>
           <EditEventForm close={this.props.close} editEventTitle={this.props.editEventTitle} eventData={this.props.eventData} />
         </div>
      </div>
    )
  }
}

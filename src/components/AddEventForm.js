import React from 'react'

export default class AddEventForm extends React.Component {

  constructor() {
    super()
    this.state = {
      title: ""
    }
  }

  handleChange = (e) => {
      let property = e.target.name
      let value = e.target.value
      this.setState({
        [property]: value
      })
    }


  handleSubmit = (e) => {
      e.preventDefault()
      let event = this.state
      let start = this.props.eventData.start.toLocaleString()
      let end = this.props.eventData.end.toLocaleString()
      this.props.addEvent(event, start, end)
    }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="input-field col s12">
            <input onChange={this.handleChange} name="title" placeholder="Title" required/>
        </div>
        <div className="align-right pad-top">
          <button className="waves-effect waves-light btn"> Add Event </button>
        </div>
      </form>
    )
  }


}

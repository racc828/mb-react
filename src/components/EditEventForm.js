import React from 'react'
import {Input, Button} from 'react-materialize'


export default class EditEventForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.eventData.title
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
    this.props.editEventTitle(event, this.props.eventData.id)
    this.props.close()
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <Input name="title" onChange={this.handleChange} s={12} label="Title" validate type='text' value={this.state.title}></Input>
        <Button waves='light'>Save</Button>
      </form>
    )
  }
}

import React from 'react'
import {Button} from 'react-materialize'

export default class AddToDepartment extends React.Component {
  constructor() {
    super()
    this.state = {
      description: ""
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
    let data = this.state
    this.props.addData(data)
  }


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="description" />
        <Button waves='light'>Add</Button>
      </form>
    )
  }
}

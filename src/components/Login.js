import React from 'react'
import {Row, Input, Card, Col, Icon, Button} from 'react-materialize'

export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
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
    let user = this.state
    this.props.getUser(user)
  }



  render() {
    return(
      <div className="main-body center">
        <h4>Login</h4>
        <div className="login-container">
          <Card>
            <Row>
              <form onSubmit={this.handleSubmit}>
                <Input name="email"  onChange={this.handleChange} s={12} label="Email" validate><Icon>mail</Icon></Input>
              	<Input name="password" onChange={this.handleChange} s={12} label="Password" validate type='password'><Icon>lock</Icon></Input>
                {this.props.error ? <p>Invalid Username or password</p> : null}
                <div className="right">
                  <Button waves='light'>Login</Button>
                </div>
              </form>
            </Row>
          </Card>
        </div>
      </div>
    )
  }
}

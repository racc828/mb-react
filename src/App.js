import React, { Component } from 'react';
import './css/materialize.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import SideNavigation from './components/SideNavigation'
import Main from './components/Main'
import Login from './components/Login'
import TopNavigation from './components/TopNavigation'
import SessionsAdapter from './adapters/SessionsAdapter'

class App extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(){
    super()
    this.state = {
      currentUser: {},
      error:false
    }
 }

 componentDidMount() {
   SessionsAdapter.currentUser()
   .then(user => {
    this.setState({
      currentUser: user
    })
   })
 }

  renderLogin = () => {
    return (
      <Login error={this.state.error} getUser={this.getUser} />
    )
  }

  renderMain = () => {
    return (
      <Main currentUser={this.state.currentUser} />
    )
  }

  getUser = (user) => {
  return SessionsAdapter.getUser(user)
  .then( (userData) => {
    if(userData.error) {
      this.setState({
        error:true
      })
    } else {
      this.setState({
       currentUser: userData
     })
     localStorage.setItem('token', userData.jwt)
    }
  })
  .then(() => {
    debugger
    if(this.state.currentUser.admin) {
      this.context.router.history.push('/')
    }
  })

}

logOut = () => {
  this.setState({
    currentUser: {}
  })
  localStorage.token = ""
  this.context.router.history.push("/")
}


  render() {
    return (
      <div className="App">
        <SideNavigation />
        <TopNavigation currentUser={this.state.currentUser} logOut={this.logOut} />
        <Route exact path="/" render={this.renderMain}/>
        <Route exact path="/login" render={this.renderLogin}/>
      </div>
    );
  }
}

export default App;
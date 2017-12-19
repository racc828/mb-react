import React from 'react'
import TopNavigation from './TopNavigation'
import AdminCalendar from './AdminCalendar'
import UserCalendar from './UserCalendar'


export default class Main extends React.Component {

  render() {
    return(
      <div className="main-body">
        {this.props.currentUser.admin ?
          <div className="main-container">
            <AdminCalendar currentUser={this.props.currentUser} />
          </div> :
          <div className="main-container">
            <UserCalendar currentUser={this.props.currentUser} />
          </div>}
      </div>
    )
  }
}

import React from 'react'
import {Navbar, NavItem} from 'react-materialize'
import { NavLink } from 'react-router-dom';
import SessionsAdapter from '../adapters/SessionsAdapter'

export default class TopNavigation extends React.Component {


  render() {
    debugger
    return(
      <div>
        <Navbar right >
          {this.props.currentUser.firstname ?
            <span>
              <a onClick={this.props.logOut}>Log Out</a>
            </span>
            :
          <span>
            <NavLink to="/login">Login</NavLink>
          </span>
        }

        </Navbar>
      </div>
    )
  }
}

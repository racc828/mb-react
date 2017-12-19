import React from 'react'
import MobileSideNav from './MobileSideNav'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import TopNavigation from './TopNavigation'
import { NavLink } from 'react-router-dom';


export default class SideNavigation extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        <div className="mobile-nav">
          <MobileSideNav/>
        </div>
        <div className="desktop-nav">
          <div className="desktop-nav-inner">
            <div className="top-logo">
              <div className="container">
                <img src="http://racquelginer.com/images/portfolio/manhattanbeerlogo.png"/>
              </div>
            </div>
            <ul>
              <h6>MAIN NAVIGATION</h6>
              <Collapsible>
              	<CollapsibleItem header='Help Desk'>
                  <li>Forms</li>
                  <li>Submit Request</li>
                  <li>Helpful Guides</li>
              	</CollapsibleItem>
              	<CollapsibleItem header='eoStar'>
              		eoStar Information
              	</CollapsibleItem>
              	<CollapsibleItem header='Links'>
                  <li>Chase</li>
                  <li>Email Archive</li>
                  <li>Email Spam</li>
                  <li>Fortis Web</li>
                  <li>NYSLA</li>
                </CollapsibleItem>
                <CollapsibleItem header='Departments'>
                  <li className="active-link"><NavLink to="/credit">Credit</NavLink></li>
                  <li className="active-link"><NavLink to="/finance">Finance</NavLink></li>
                  <li className="active-link"><NavLink to="/humanresources">Human Resources</NavLink></li>
                  <li className="active-link"><NavLink to="/marketing">Marketing</NavLink></li>
                  <li className="active-link"><NavLink to="/mis">MIS</NavLink></li>
                  <li className="active-link"><NavLink to="/operations">Operations</NavLink></li>
                  <li className="active-link"><NavLink to="/sales">Sales</NavLink></li>
                </CollapsibleItem>
                <CollapsibleItem header='Forms'>
                  <li>Employee Process Change Form</li>
                  <li>New Customer Form</li>
                  <li>ST-120 Form</li>
                  <li>Credit Application</li>
                  <li>Liscence Update Form</li>
                  <li>Customer Route Transfer</li>
                  <li>Employee Business Expense Reimbursement</li>
                </CollapsibleItem>
                <CollapsibleItem header='Locations'>
                  <li>Our Location</li>
                </CollapsibleItem>
                <CollapsibleItem header='About Us'>
                  <li>Our Video</li>
                </CollapsibleItem>

              </Collapsible>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

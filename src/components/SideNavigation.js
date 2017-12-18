import React from 'react'
import MobileSideNav from './MobileSideNav'
import {Collapsible, CollapsibleItem} from 'react-materialize'
import TopNavigation from './TopNavigation'


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
                  <li>Credit</li>
                  <li>Finance</li>
                  <li>Human Resources</li>
                  <li>Marketing</li>
                  <li>MIS</li>
                  <li>Operations</li>
                  <li>Sales</li>
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

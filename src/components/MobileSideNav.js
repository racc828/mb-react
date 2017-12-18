import React from 'react'
import {SideNav, SideNavItem, Button} from 'react-materialize'

export default class MobileSideNav extends React.Component {
  render() {
    return(
        <SideNav
        	trigger={<Button>Menu</Button>}
        	options={{ closeOnClick: true }}
        	>
        	<SideNavItem userView/>
        	<SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
        	<SideNavItem href='#!second'>Second Link</SideNavItem>
        	<SideNavItem divider />
        	<SideNavItem subheader>Subheader</SideNavItem>
        	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav>
    )
  }
}

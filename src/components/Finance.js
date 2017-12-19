import React from 'react'
import AddToDepartment from './AddToDepartment'

export default class Finance extends React.Component {
  constructor() {
    super()
    this.state = {
      showAddForm: false,
      departmentData: []
    }
  }


  showAddForm = (e) => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  render() {
    return(
      <div className="main-body">
        <div className="body-inner">
          <h5>Finance Department
            {this.props.currentUser.department == "finance" || this.props.currentUser.department == "all" ?
              <span><i onClick={this.showAddForm} className="fa fa-plus"></i></span> :
              null
            }
          </h5>
          {this.state.showAddForm ? <AddToDepartment addData={this.addData} /> : null}
        </div>
      </div>
    )
  }


}

import React from 'react'
import AddToDepartment from './AddToDepartment'
import DepartmentDataAdapter from '../adapters/DepartmentDataAdapter'


export default class Credit extends React.Component {
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

  addData = (data) => {
    DepartmentDataAdapter.addData(data)
    .then((newData) => {
      departmentData: [...this.state.departmentData, data]
    })
  }


  render() {
    return(
      <div className="main-body">
        <div className="body-inner">
          <h5>Credit Department
            {this.props.currentUser.department == "credit" || this.props.currentUser.department == "all" ?
              <span><i onClick={this.showAddForm} className="fa fa-plus"></i></span> :
              null
            }
          </h5>
          {this.state.showAddForm ? <AddToDepartment addData={this.addData} /> : null}
          {this.state.departmentData.map((data) => {
            <p> {data} </p>
          })}
        </div>
      </div>
    )
  }


}

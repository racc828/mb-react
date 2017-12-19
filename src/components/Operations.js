import React from 'react'
import AddToDepartment from './AddToDepartment'
import DepartmentDataAdapter from '../adapters/DepartmentDataAdapter'


export default class Operations extends React.Component {
  constructor() {
    super()
    this.state = {
      showAddForm: false,
      departmentData: []
    }
  }

  componentDidMount() {
    DepartmentDataAdapter.getData("operations")
    .then((data) => {
      this.setState({
        departmentData: data
      })
    })
  }

  ComponentWillReceiveProps() {
    DepartmentDataAdapter.getData("operations")
    .then((data) => {
      this.setState({
        departmentData: data
      })
    })
  }


  showAddForm = (e) => {
    this.setState({
      showAddForm: !this.state.showAddForm
    })
  }

  addData = (data) => {
    DepartmentDataAdapter.addData(data, this.props.currentUser.id, "operations")
    .then((newData) => {
      this.setState({
        departmentData: [...this.state.departmentData, data]
      })
    })
  }


  render() {
    return(
      <div className="main-body">
        <div className="body-inner">
          <h5>Operations
            {this.props.currentUser.department == "operations" || this.props.currentUser.department == "all" ?
              <span><i onClick={this.showAddForm} className="fa fa-plus"></i></span> :
              null
            }
          </h5>
          {this.state.showAddForm ? <AddToDepartment currentUser={this.props.currentUser} addData={this.addData} /> : null}
          {this.state.departmentData.map((data) => {
            return <p> {data.description} </p>
          })}
        </div>
      </div>
    )
  }


}

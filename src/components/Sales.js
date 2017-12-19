import React from 'react'
import AddToDepartment from './AddToDepartment'
import DepartmentDataAdapter from '../adapters/DepartmentDataAdapter'


export default class Sales extends React.Component {
  constructor() {
    super()
    this.state = {
      showAddForm: false,
      departmentData: []
    }
  }

  componentDidMount() {
    DepartmentDataAdapter.getData("sales")
    .then((data) => {
      this.setState({
        departmentData: data
      })
    })
  }

  ComponentWillReceiveProps() {
    DepartmentDataAdapter.getData("sales")
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
    DepartmentDataAdapter.addData(data, this.props.currentUser.id, "sales")
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
          <h5>Sales
            {this.props.currentUser.department == "sales" || this.props.currentUser.department == "all" ?
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

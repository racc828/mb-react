const path = 'https://mb-backend.herokuapp.com/api/v1/departmentdatum'
// const path = 'http://localhost:3000/api/v1/departmentdatum'

export default class DepartmentDataAdapter {

  static addData(data, userId, department) {
    debugger
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        description: data.description,
        user_id: userId,
        department: department
      })
    })
    .then( resp => resp.json())
  }

  static getData(department) {
    return fetch(`${path}/get_department_data`,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        department: department
      })
    })
    .then( resp => resp.json())
  }






}

let headers = () => {
  const token = localStorage.getItem('token')
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
}

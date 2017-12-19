const path = 'https://mb-backend.herokuapp.com/api/v1/departmentdatum'
// const path = 'http://localhost:3000/api/v1/departmentdatum'

export default class DepartmentDataAdapter {

  static addData(data) {
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        description: data.description
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

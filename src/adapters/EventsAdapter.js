const path = 'https://mb-backend.herokuapp.com/api/v1/events'
// const path = 'http://localhost:3000/api/v1/events'

export default class EventsAdapter {

  static addEvent(event, start, end) {
    debugger
    return fetch(path,{
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        title:event.title,
        start:start,
        end: end
      })
    })
    .then( resp => resp.json())
  }

  static getEvents(){
    return fetch(path,{
      method: 'GET',
      headers: headers()
    })
    .then( resp => resp.json())
  }

  static updateTitle(){
    return fetch(path,{
      method: 'POST',
      headers: headers()
    })
    .then( resp => resp.json())
  }




  static editEventTitle(newTitle, eventId) {
    debugger
    return fetch(`${path}/update_title`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        title: newTitle.title,
        event_id: eventId
      })
    })
    .then( resp => resp.json())
  }

  static deleteEvent(eventId) {
    return fetch(`${path}/${eventId}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify({})
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

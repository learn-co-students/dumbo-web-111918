
import { editHobbit, loadHobbits } from './hobbitActions'

/* ------------- THUNK CREATORS --------------- */

export const patchHobbit = (hob) => {
  return function thunk (dispatch){
    return fetch(`http://localhost:3000/hobbits/${hob.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(hob)
    })
    .then(r => r.json())
    .then(res => dispatch(editHobbit(res)))
  }
}


export const getHobbits = () => dispatch => {
  return fetch('http://localhost:3000/hobbits')
    .then(r => r.json())
    .then(res => dispatch(loadHobbits(res)))
}

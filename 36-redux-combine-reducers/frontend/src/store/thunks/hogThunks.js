import { loadHogs } from '../actions/hogActions'

export const getHogs = (informationProvidedByComponent) => (dispatch => {
  return fetch('http://localhost:3000/hogs')
    .then(r => r.json())
    .then(res => dispatch(loadHogs(res)))
})

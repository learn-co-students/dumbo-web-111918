// import hogs from '../data/porkers_data'

const initialState = []

const hogReducer = (state = initialState, action) => {
  console.log('HOG REDUCER STATE: ', state, 'ACTION: ', action);
  switch (action.type) {

    case 'LOAD_HOGS': {
      return action.payload
    }

    case 'ADD_HOG': {
      return [...state, action.payload]

    }

    // case "SELECT_HOG":
    //   return "I'm a pretty little butterfly"
    default:
      return state
  }

}


export default hogReducer

// state and action are both objects
import wizardsArray from '../wizardsArray'

const initialState = {
  wizards: wizardsArray,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WIZARD":
      let newWizard = action.payload
      let newArray = [...state.wizards, newWizard]
      return {...state, wizards: newArray}
      // return {...state, wizards: [...state.wizards, action.payload]}

    case "REMOVE_WIZARD":
      let wizard = action.payload
      let array = state.wizards.filter(wizardObj => wizardObj.name !== wizard.name)
      return {...state, wizards: array}
      // return {...state, wizards: state.wizards.filter(wizardObj => wizardObj.name !== action.paylod.name)}
    default:
      return state
  }
}

export default reducer

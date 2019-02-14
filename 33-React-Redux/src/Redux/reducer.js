const initialState = {
  contestants: {
    1: {
      id: 1,
      name: "Regina",
      votes: 0,
      image: "https://vignette.wikia.nocookie.net/villains/images/5/59/Prom_Regina.jpg/revision/latest?cb=20120125190707"
    },
    2: {
      id: 2,
      name: "Gretchen",
      votes: 0,
      image: "https://i.pinimg.com/originals/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"
    },
    3: {
      id: 3,
      name: "Janis",
      votes: 0,
      image: "https://vignette.wikia.nocookie.net/meangirls/images/5/54/Janis_Ian.JPG/revision/latest/scale-to-width-down/250?cb=20130403104124"
    }
  },
  judge: "Eric"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_VOTE":
      return {
        ...state,
        contestants: {
              ...state.contestants,
              [action.payload]: {
                ...state.contestants[action.payload],
                votes: state.contestants[action.payload]["votes"] + 1
              }
            }
      }
    case "DECREASE_VOTE":
      return {
        ...state,
        contestants: {
              ...state.contestants,
              [action.payload]: {
                ...state.contestants[action.payload],
                votes: state.contestants[action.payload]["votes"] - 1
              }
            }
      }
    default:
      return state
  }
}

export default reducer

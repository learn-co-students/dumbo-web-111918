import React from 'react'
import Contestants from './Contestants'
console.log(Contestants);
class MainContainer extends React.Component {
  // state = {
  //   contestants: {
  //     1: {
  //       id: 1,
  //       name: "Regina",
  //       votes: 0,
  //       image: "https://vignette.wikia.nocookie.net/villains/images/5/59/Prom_Regina.jpg/revision/latest?cb=20120125190707"
  //     },
  //     2: {
  //       id: 2,
  //       name: "Gretchen",
  //       votes: 0,
  //       image: "https://i.pinimg.com/originals/98/98/88/989888d4394e1d0041ffdf820f342fa4.jpg"
  //     },
  //     3: {
  //       id: 3,
  //       name: "Janis",
  //       votes: 0,
  //       image: "https://vignette.wikia.nocookie.net/meangirls/images/5/54/Janis_Ian.JPG/revision/latest/scale-to-width-down/250?cb=20130403104124"
  //     }
  //   }
  // }

  // increaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] + 1
  //       }
  //     }
  //   })
  // }
  //
  // decreaseVote = (contestantId) => {
  //   this.setState({
  //     contestants: {
  //       ...this.state.contestants,
  //       [contestantId]: {
  //         ...this.state.contestants[contestantId],
  //         votes: this.state.contestants[contestantId]["votes"] - 1
  //       }
  //     }
  //   })
  // }


  render() {
    return (
      <div>
        <Contestants />
        <h1> THANKS FOR VOTING </h1>
      </div>
    )
  }
}


export default MainContainer

class Squirrel {

  constructor(name) {
    this.name = name
  }

  render(){
    return `<h2>${ this.name }</h2>
      <button>Find acorns with ${ this.name }?</button> 
      <button>Run away from ${ this.name }.</button>`
  }

}
class SquirrelList {
  constructor(squirrelNames){

    this.squirrels = squirrelNames.map(function(squirrelName){
      return new Squirrel(squirrelName);
    })
  }
  
  random(){
    return this.squirrels[Math.round(Math.random() * this.squirrels.length)]
  }
}
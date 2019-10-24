function Traveler (name){
    this.name = name;
    this.Food = 1;
    this.isHealthy = true;
   
}

function Wagon (capacity) {
    this.capacity = capacity;
    this.passengers = []
}

// function Hunter(name){
//     Traveler.call (this,name);
//     this.food = ???;

// }

// Hunter.prototype = Object.create (Traveler.prototype);
// Hunter.prototype.constructor = Hunter;
// //adds a specific function to the hunter that is different from the hunt function of the traveler
// Hunter.prototype.hunt = function(){

// }
// Hunter.prototype.steal = function (traveler){
//     traveler.food = traveler.food - 10;
//     this.food = this.food + 10;
//     console.log (this.name =" stole food from" + traveler.name)
// }

Traveler.prototype.hunt = function() {
    this.Food += 2
}

Traveler.prototype.eat = function (){
    if (this.Food === 0 ){ this.isHealthy = false}
    else {this.Food-=1}
    
    
}


Wagon.prototype.getAvailableSeatCount = function (){
    return this.capacity - this.passengers.length
}
Wagon.prototype.join = function (traveler){
    
    // if there is available seat count subtract capacity by 1
    // Add the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
    if (this.getAvailableSeatCount() >= 1) {this.passengers.push(traveler)}
    
}
Wagon.prototype.shouldQuarantine = function (traveler){
   //Return true if there is at least one unhealthy person in the wagon. Return false if not.
   for (let i = 0; i < this.passengers.length; i++) {
        let currentPassenger = this.passengers[i]
        if (currentPassenger.isHealthy === true ){

        }
        else {return true}
  }
  return false
}
Wagon.prototype.totalFood = function (){
    let totalFood = 0 
   for(let i = 0; i < this.passengers.length; i++){
       let currentPassenger = this.passengers[i]
       totalFood += currentPassenger.Food  
   }
   return totalFood
}




// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);




// class Traveler {
//     constructor (name){
//         this.name = name;
//         this.food = food;
//         this.isHealthy = isHealthy;
//     }
// }


// class Hunter extends Traveler {
//     constructor (name){
//         super(name)
//         this.food = 200;
//     }

//     hunt (){include hunt funtion here}
// }
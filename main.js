function Traveler (name){
    this.name = name;
    this.Food = 1;
    this.isHealthy = true;
   
}

function Wagon (capacity) {
    this.capacity = capacity;
    this.passengers = []
}

function Hunter(name){
    Traveler.call (this,name);
    this.Food = 2;
}

function Doctor(name){
    Traveler.call (this,name);
    
}

Hunter.prototype = Object.create (Traveler.prototype);
Hunter.prototype.constructor = Hunter;
//adds a specific function to the hunter that is different from the hunt function of the traveler
Hunter.prototype.eat = function(){
    if (this.Food <= 1){ 
        this.isHealthy = false
        this.Food -=1
    }
    else {this.Food-=2}

}
Hunter.prototype.hunt = function(){
    this.Food += 5
}
//Transfers numOfFoodUnits from the hunter to a different traveler. If the hunter has less food than they are being asked to give, then no food should be transferred.
Hunter.prototype.giveFood = function(traveler,numOfFoodUnits){
    
    if (numOfFoodUnits >= this.Food){
        
    }
    else {this.Food = this.Food - numOfFoodUnits;
        traveler.Food = traveler.Food + numOfFoodUnits;
        }
    
}

Doctor.prototype = Object.create (Traveler.prototype);
Doctor.prototype.constructor = Doctor;
Doctor.prototype.heal = function (traveler){
    traveler.isHealthy = true

}




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
Wagon.prototype.shouldQuarantine = function (){
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
       totalFood = totalFood + currentPassenger.Food  
   }
   return totalFood
}




// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log (wagon.passengers)
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);





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
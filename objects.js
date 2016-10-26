//Literal Object - uses {}
var food = {
  edible: true
}
food.edible = true//both valid ways to add a property to this object
var pizza = food
//var pizza = Object.create(food) DOES actually clone it.  Must use Object.create()
pizza.edible = false
console.log(pizza)
console.log(food)//In JS, if you say var = another variable, instead of cloning it it just references it by another name.  Everything you do to one will affect the other.

//New object - uses 'new Object()'
var food = new Object()
food.edible = true
//var tacos = Object.create(food) DOES SAME AS ABOVE - Clones the object.  Still not as powerful as constructor function below.

//Constructor Function - capitalize your variable in this case
var Food = function() {
   this.edible = true
   this.totalEaten = 0
   this.eat = function(){
     this.totalEaten++
     console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
   }
}//the point of this function is to be cloned and copied, not run directly.

var pizza = new Food()//pizza is a 'copy' or 'instance' of it's master template, Food.
console.log(pizza)//displays Food object with property (edible = true) inherited from parent.

var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)//different type as pizza2, but still retains edible inherited form parent

var pizza2 = new Food()
pizza2.type = 'Margarita Pizza'
console.log(pizza2)//different type as pizza1, but still retains edible inherited form parent

class Vehicle {
  constructor(make, model){
    this.make = make
    this.model = model
    this.year
    this.setYear = this.setYear.bind(this)//annoying but necessary.  anytime you make a method you need a bind statement on the constructor.
  }

setYear(year){
  this.year = year
}
  drive(speed) {
    console.log(`${make} ${model} is driving ${speed}mph.`)//ES6 tick marks
  }
}

class Toyota extends Vehicle {
  constructor(model) {
      super('Toyota', model)//this is always necessary to be called when using 'extends'.  super() refers to parent class, running the original parent constructor function first.
  }
}

var $4Runner = new Toyota('4Runner')
$4Runner.setYear(2006)//could also say '$4Runner.year = 2006', but then this data is not manipulatable as it is when you use Setters (like setYear(year)).
console.log($4Runner)

var $prius = new Toyota('Prius')
$prius.year = 2008
console.log($prius)

class Person {
  constructor(height, weight, occupation, name){
    this.height = height
    this.weight = weight
    this.occupation = occupation
    this.name = name
  }
}
class Athlete extends Person {
  constructor(height, weight, sport, leftHanded, name){
    super(height, weight, 'Athlete', name)
    this.sport = sport
    this.leftHanded = leftHanded
  }
}
class BaseballPlayer extends Athlete{
  constructor(height, weight, sport, leftHanded, name, battingAvg, position, teamName){
    super(height, weight, 'Baseball', leftHanded, name)
      this.battingAvg = battingAvg
      this.position = position
      this.teamName = teamName

    }
  }

var john = new BaseballPlayer()

console.log(john)

var steve = new Athlete('Steve')
steve.name = 'Steve'
steve.height = '5 feet tall'
steve.weight = '160 lbs'
steve.sport = 'Basketball'
steve.leftHanded = true
console.log(steve)

var spaceship1 = {
  topSpeed: '2lyph',
  shipName: 'Galaxy Cruiser',
  launch: function() {
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
  },
  land: function() {
    console.log(this.shipName + ' has landed!!!')
  }
  }


//-----------------------------------------------------------------------------------//


var spaceship2 = new Object()
  spaceship2.topSpeed = '3lyph'
  spaceship2.shipName = 'Milennium Falcon'
  spaceship2.launch = function(){
      console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
  spaceship2.land = function(){
    console.log(this.shipName + ' has landed!!!')
  }


  //-----------------------------------------------------------------------------------//

var Spacecraft = function(){
  this.topSpeed = '4lyph'
  this.shipName = 'The Flying Dutchman'
  this.launch = function(){
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
  }
}

var spaceship3 = new Spacecraft()

//-----------------------------------------------------------------------------------//

class Spacecraft1 {
  constructor() {
    this.topSpeed = '5lyph'
    this.shipName = 'The Black Pearl'
  }
  launch(){
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
  }
  }
var spaceship4 = new Spacecraft1()

//-----------------------------------------------------------------------------//

Spacecraft.prototype.land = function(){
    console.log(this.shipName + ' has landed!!!')
  }

Spacecraft1.prototype.land = function(){
  console.log(this.shipName + ' has landed!!!')
}




var spaceship5 = Object.create(spaceship1)
  spaceship5.topSpeed = '6lyph',
  spaceship5.shipName = 'Discovery'


var spaceship6 = Object.create(spaceship2)
spaceship6.topSpeed = '7lyph'
spaceship6.shipName = 'Spirit of St. Louis'
// console.log(spaceship5)
// console.log(spaceship6)

var spaceship7 = new Spacecraft()
spaceship7.topSpeed = '10lyph'
spaceship7.shipName = 'DidThisWork?'
// console.log(spaceship7)

class SuperSpaceCraft extends Spacecraft1 {
  constructor(topSpeed, shipName){
  super()
  this.topSpeed = topSpeed
  this.shipName = shipName
  // this.launch() = launch()
}
}
var spaceship8 = new SuperSpaceCraft('100lyph', 'SuperFastCraft')
// spaceship8.launch()
// console.log(spaceship8)
// Spacecraft.prototype.land = function(){
//     console.log(this.shipName + ' has landed!!!')
//   }
var launcher = document.getElementById('launchButton')
launcher.addEventListener('click', animationLoop)
var animationId
function animationLoop(){
  var rocket = document.getElementById('rocket')
  var top = Number(getComputedStyle(rocket).top.replace('px',''))

  if (top <= 100){
    top = 0
  }
  rocket.style.position = 'absolute'
  rocket.style.top = top - 1 + 'px'
  // rocket.style.left = left + 3 + 'px'
  rocket.style.marginTop = '500px'
  animationId = requestAnimationFrame(animationLoop)

}
animationLoop()


spaceship1.launch()
setTimeout(spaceship1.land.bind(spaceship1), 3000)
spaceship2.launch()
setTimeout(spaceship2.land.bind(spaceship2), 4000)
spaceship3.launch()
setTimeout(spaceship3.land.bind(spaceship3), 5000)
spaceship4.launch()
setTimeout(spaceship4.land.bind(spaceship4), 6000)
spaceship5.launch()
setTimeout(spaceship5.land.bind(spaceship5), 7000)
spaceship6.launch()
setTimeout(spaceship6.land.bind(spaceship6), 8000)
spaceship7.launch()
setTimeout(spaceship7.land.bind(spaceship7), 9000)
spaceship8.launch()
setTimeout(spaceship8.land.bind(spaceship8), 10000)

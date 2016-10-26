// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(name, id) {
        super()
        this.name = name
        this.id = id

        // 3. Call the parent constructor function using the super function

        // 4. Assign a name and id instance property to the incoming name and id arguments

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
var oBrother = new Trailer('Man of Constant Sorrow', 'YZtgZ5fHOuU')
var theRock = new Trailer('The Rock', '313n0wga2xo')
var $300 = new Trailer('300', 'wDiUG52ZyHQ')
var deadpool = new Trailer('DEADPOOL', 'gtTfd6tISfw')

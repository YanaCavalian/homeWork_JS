// //Create a prototype chain Inherit from university obj with universityName and dean properties
// Create faculty obj with facultyName and groups arr properties and method enlistStudent into groups
// Group can contain only 12 students

function University(universityName, dean) {
    this.universityName = universityName;
    this.dean = dean;
  }
  
  function Faculty(universityName, dean, facultyName) {
    University.call(this, universityName, dean);
    this.facultyName = facultyName;
    this.groups = [];
  }
  
  Faculty.prototype = Object.create(University.prototype);
  Faculty.prototype.constructor = Faculty;
  Faculty.prototype.enlistStudent = function (studentName) {
    if (this.groups.length === 0 || this.groups[this.groups.length - 1].length >= 12) {
      this.groups.push([studentName]);
    } else {
      this.groups[this.groups.length - 1].push(studentName);
    }
  };
  
  const myUniversity = new University("Polytechnic", "Dean Name");
  const myFaculty = new Faculty("Polytechnic", "Dean Name", "Engineering");
  
  console.log(myFaculty.universityName);
  myFaculty.enlistStudent("Taras");
  console.log(myFaculty.groups);
  
//   //Create a basic Animal that has name property and a getInfo() method.
// getInfo method should return info about animal
// Create sub objects, Mammal and Bird, that inherit the properties and methods of the Animal. They should receive info about where they live
// Mammal should have method run
// Bird should have method fly
// Create Dog from Mammal and add property breed
// Add method whoIsGoodDog, this method should return 'woof woof'
// Create Penguin from Bird and add property species
// Update method fly and print 'can't fly'
// Add method swim

// Define the Animal constructor
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.getInfo = function () {
    return `This is ${this.name}.`;
  };
  
  function Mammal(name, live) {
    Animal.call(this, name);
    this.live = live;
  }
  
  Mammal.prototype = Object.create(Animal.prototype);
  Mammal.prototype.constructor = Mammal;
  
  Mammal.prototype.run = function () {
    return `${this.name} runs on land.`;
  };
  
  function Bird(name, live) {
    Animal.call(this, name);
    this.live = live;
  }
  
  Bird.prototype = Object.create(Animal.prototype);
  Bird.prototype.constructor = Bird;
  
  Bird.prototype.fly = function () {
    return `${this.name} can fly.`;
  };
  
  function Dog(name, live, breed) {
    Mammal.call(this, name, live);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Mammal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.whoIsGoodDog = function () {
    return 'woof woof';
  };
  
  function Penguin(name, live, species) {
    Bird.call(this, name, live);
    this.species = species;
  }
  
  Penguin.prototype = Object.create(Bird.prototype);
  Penguin.prototype.constructor = Penguin;
  
  Penguin.prototype.fly = function () {
    return "Can't fly";
  };
  
  Penguin.prototype.swim = function () {
    return `${this.name} can swim underwater.`;
  };
  
  const myDog = new Dog('lelya', 'on land', 'Chihuahua');
  const myPenguin = new Penguin('luky', 'in cold regions', 'King Penguin');
  
  console.log(myDog.getInfo());
  console.log(myDog.run());
  console.log(myDog.whoIsGoodDog());
  
  console.log(myPenguin.getInfo());
  console.log(myPenguin.fly());
  console.log(myPenguin.swim());
  
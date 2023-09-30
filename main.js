
//Create class BankAccount
//Add properties balance and accountHolder Protect filed balance from direct change Use getters, setters or methods

class BankAccount {
    #balance = 0;
    get money() {
        console.log(this.#balance)
    }
    set money(num) {
        if (this.#balance + num >= 0) {
            this.#balance += num
        } else {
            console.log( `Your balance: ${this.#balance}`)
        }
    }
}

const userMoney = new BankAccount();
userMoney.money = 100;
userMoney.money = -200;
userMoney.money = 300; 

//Inheritance and Polymorphism

class Animal {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `This is an animal named ${this.name}.`;
    }
}

class Mammal extends Animal {
    constructor(name, habitat) {
        super(name);
        this.habitat = habitat;
    }

    getInfo() {
        return `${super.getInfo()} It lives in ${this.habitat}.`;
    }

    run() {
        return `${this.name} is running.`;
    }
}

class Bird extends Animal {
    constructor(name, habitat) {
        super(name);
        this.habitat = habitat;
    }

    getInfo() {
        return `${super.getInfo()} It lives in ${this.habitat}.`;
    }

    fly() {
        return `${this.name} can fly.`;
    }
}

class Dog extends Mammal {
    constructor(name, habitat, breed) {
        super(name, habitat);
        this.breed = breed;
    }

    getInfo() {
        return `${super.getInfo()} It is a ${this.breed} dog.`;
    }

    whoIsGoodDog() {
        return 'Woof woof!';
    }
}

class Penguin extends Bird {
    constructor(name, habitat, species) {
        super(name, habitat);
        this.species = species;
    }

    getInfo() {
        return `${super.getInfo()} It is a ${this.species} penguin.`;
    }

    fly() {
        return `${this.name} can't fly.`;
    }

    swim() {
        return `${this.name} can swim.`;
    }
}

const dog = new Dog('Lelya', 'House', 'Chihuahua');
console.log(dog.getInfo()); 
console.log(dog.run()); 
console.log(dog.whoIsGoodDog()); 

const penguin = new Penguin('Penny', 'Antarctica', 'King Penguin');
console.log(penguin.getInfo());
console.log(penguin.fly()); 
console.log(penguin.swim());

//Task_3

class Vehicle {
    constructor(power, gasTank, mass) {
        this.power = power;
        this.gasTank = gasTank;
        this.mass = mass;
        this.maxSpeed = 0.84 * power / mass;
        this.gas = 0;
        this.started = false;
        this.speed = 0;
        this.distance = 0;
        this.gasUsage = Math.round(this.maxSpeed / this.power * 100);
    };
    getMaxSpeed() {
        return this.maxSpeed;
    };
    getGasUsage() {
        return this.gasUsage
    };
    startEngine() {
        this.started = true
    };
    stopEngine() {
        this.started = false
    };
    drive(speed, distance) {
        if (this.started === true && speed < this.maxSpeed && speed > 0) {
            this.speed = speed;
            this.distance = distance;
        }
    }
    addGas(gas) {
        if (gas > 0 && gas < this.gasTank) {
            this.gas = gas;
        } else if (gas >= this.gasTank) {
            this.gas = this.gasTank
        }
    }
    printInfo() {
        console.log(`Power:${this.power}; GasTank:${this.gasTank}; mass:${this.mass}; gas:${this.gas}; maxSpeed:${this.maxSpeed}; speed:${this.speed}km; started:${this.started}; distance:${this.distance}km;  gasUsage:${this.gasUsage}; type:${this.type}; maxPassengerCount:${this.maxPassengerCount}; passengerCount:${this.passengerCount};`)
    }
}

class Car extends Vehicle {
    constructor(type, maxPassengerCount, power, gasTank, mass) {
        super(power, gasTank, mass);
        this.type = type;
        this.maxPassengerCount = maxPassengerCount
        this.passengerCount = 0;
    }
    updatePassengers(passengers) {
        if (passengers > 0 && passengers <= this.maxPassengerCount) {
            this.passengerCount = passengers
        }
    }
}
class Bus extends Car {
    constructor(type, maxPassengerCount, power, gasTank, mass) {
        super(type, maxPassengerCount, power, gasTank, mass);
    }
}

const myCar = new Car("sedan)", 10, 100, 40, 2);
myCar.startEngine();
myCar.drive(60, 100);
myCar.addGas(20);
myCar.updatePassengers(5);
myCar.printInfo();

const myBus = new Bus("Boos", 20, 250, 90, 10);
myBus.startEngine();
myBus.drive(30, 200);
myBus.addGas(50);
myBus.updatePassengers(15);
myBus.printInfo();

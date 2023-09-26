//Calculator
// Create obj with property result
// Create methods that calculates +, -, *, /
// Make possible to call one function after another
// Use correct method creation

const calculator = {
    result: 0,
    sum: function (num) {
      this.result += num;
      return this; 
    },
    sub: function (num) {
      this.result -= num;
      return this; 
    },
    mul: function (num) {
      this.result *= num;
      return this; 
    },
    div: function (num) {
      if (num !== 0) {
        this.result /= num;
      } else {
        console.error("Invalid");
      }
      return this; 
    },
  };
  
  const result = calculator.sum(2).sum(2).mul(4).result;
  
  console.log(result); 
  
//   Create arr method

// Create obj with property from and to
// Create function createArr that reads obj properties and
// Creates new sorted arr with range from and to
// Assign this arr as obj property

// Create 3 solutions Solution 1 without bind, call or apply
// Solution 2 with bind Solution 3 with call or apply

//1 without bind, call or apply
const obj = {
    from: 1,
    to: 10,
  };
  
  function createArr() {
    const arr = [];
  
    for (let i = this.from; i < this.to; i++) {
      arr.push(i);
    }
  
    this.arr = arr;
  }
  
  obj.createArr = createArr;
  obj.createArr();
  
  const createArrBind = createArr.bind(obj);
  createArrBind();
  
  createArr.call(obj);
  createArr.apply(obj);
  
  console.log(obj);


  //constructor function
  function Car(model, color, age, speed, gasTank, started) {
    const maxSpeed = 200;
    const maxGas = 20;
  
    function speedUp(newSpeed) {
      const started = this.started;
      const emptyGas = this.checkGasIsEmpty();
  
      if (started && !emptyGas) {
        const gasLevel = this.gasTank - 5;
        const speedCalc = this.speed + newSpeed;
        this.speed = speedCalc <= maxSpeed ? speedCalc : maxSpeed;
        this.gasTank = gasLevel < 0 ? 0 : gasLevel;
        gasLevel === 0 && this.stop();
      } else {
        this.stop();
      }
  
      return this;
    }
    function startEngine() {
      this.started = !this.checkGasIsEmpty();
      return this;
    }
  
    this.model = model;
    this.color = color;
    this.age = age;
    this.speed = speed;
    this.gasTank = gasTank;
    this.started = started;
    this.startEngine = startEngine;
    this.drive = function drive() {
      const started = this.started;
      const emptyGas = this.checkGasIsEmpty();
      if (started && !emptyGas) {
        this.speed = 30;
      }
      return this;
    };
    this.stop = function stop() {
      this.speed = 0;
      this.started = false;
  
      return this;
    };
    this.speedUp = speedUp;
    this.slowDown = function slowDown(newSpeed) {
      const started = this.started;
      const emptyGas = this.checkGasIsEmpty();
  
      if (started && !emptyGas) {
        const gasLevel = this.gasTank - 5;
        const speedCalc = this.speed - newSpeed;
        this.speed = speedCalc <= 0 ? 0 : speedCalc;
        this.gasTank = gasLevel < 0 ? 0 : gasLevel;
        gasLevel === 0 && this.stop();
      } else {
        this.stop();
      }
  
      return this;
    };
    this.addGas = function addGas(newLevel) {
      const gasLevel = this.gasTank + newLevel;
      this.gasTank = gasLevel > maxGas ? 20 : gasLevel;
  
      return this;
    };
    this.checkGasIsEmpty = function () {
      return this.gasTank === 0;
    };
  }
  
  const car = new Car("BMW", "White", 5, 0, 20, false);
  console.log(car);


  
  
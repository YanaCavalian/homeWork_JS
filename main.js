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
const obj1 = {
    from: 1,
    to: 10,
    createArr: function () {
      this.arr = [];
      for (let i = this.from; i <= this.to; i++) {
        this.arr.push(i);
      }
      this.arr.sort((a, b) => a - b);
    },
  };
  
  obj1.createArr();
  console.log(obj1.arr); 

  //Solution 2 with bind
  const obj2 = {
    from: 1,
    to: 10,
    createArr: function () {
      this.arr = [];
      for (let i = this.from; i <= this.to; i++) {
        this.arr.push(i);
      }
      this.arr.sort((a, b) => a - b);
    },
  };
  
  const createArrBound = obj2.createArr.bind(obj2);
  createArrBound();
  console.log(obj2.arr); 
  
  //Solution 3 with call or apply
  const obj3 = {
    from: 1,
    to: 10,
    createArr: function () {
      this.arr = [];
      for (let i = this.from; i <= this.to; i++) {
        this.arr.push(i);
      }
      this.arr.sort((a, b) => a - b);
    },
  };
  
  obj3.createArr.call(obj3);
  console.log(obj3.arr);


  
  
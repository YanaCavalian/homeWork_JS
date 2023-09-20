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

obj.createArr = function () {
  if (this.from <= this.to) {
    this.arr = Array.from({ length: this.to - this.from + 1 }, (_, i) => this.from + i);
    this.arr.sort((a, b) => a - b);
  } else {
    console.error("error");
  }
};


const createArrBind = obj.createArr.bind(obj);
createArrBind(); 
console.log(obj.arr);


const createArrCall = obj.createArr.call(obj);
console.log(obj.arr);


const createArrApply = obj.createArr.apply(obj);
console.log(obj.arr);


obj.createArr();
console.log(obj.arr);



  
  
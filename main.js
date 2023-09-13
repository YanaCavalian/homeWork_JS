// Create a function that solves quadratic equation
// Use discriminant fot finding equation roots
// Return value of function should be obj {x1, x2}
// If there are no roots return {x1:null, x2:null}
const calculate = (a, b, c) => {

    const discriminant = b * b - 4 * a * c;
  
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return { x1, x2 };
    } else if (discriminant === 0) {
      const x1 = -b / (2 * a);
      return { x1, x2: x1 };
    } else {
      return { x1: null, x2: null };
    }
  };
  
  const roots = calculate(1, 5, 6);
  console.log(roots);
  
  // Create a function that finds a factorial of a number
  const factorial = (num) => {
    let a = 1;
    for (let i = 2; i <= num; i++) {
      a *= i;
    }
    return a;
  };
  
  const a = factorial(5);
  console.log(a); 
  
  
  // Create a function that receives a value from user
  // and prints list of fibonacci seq
  // Seq starts from 1
  function fibonacci(b) {
    let x = 0;
    let y = 1;
    
    for (let i = 0; i < b; i++) {
      console.log(y);
      let result = x + y;
      x = y;
      y = result;
    }
  }
  
  let b = 5;
  fibonacci(b);
  
  
  
  // Create a function that receives a value from user
  // and prints a pyramid with rows from received value
  // Empty space fill with # Pyramid fill with *
  const printPyramid = (n) => {
    let c = 1;
    while (c <= n) {
        let spaces = '#'.repeat(n - c);
        let stars = '*'.repeat(2 * c - 1);
        let row = spaces + stars + spaces;
        console.log(row);
        c++;
    }
  };
  
  printPyramid(5);
  
  // Calculator 
  
  // Create a function that accepts a callback
  // and infinite number of arguments
  // Callbacks can be: addition, subtraction, multiplication, division
  
  // const calculate = (callback, arg1, arg2, ...) => {
  //   // your code
  // };
  
  // const result = calculate(addition, 1, 1, 1, 1);
  // // 1 + 1 + 1 + 1 = 4
  // const result = calculate(subtraction, 20, 10, 5);
  // // 20 - 10 - 5 = 5
  // const result = calculate(multiplication, 2, 10, 2);
  // // 2 * 10 * 2 = 40
  // const result = calculate(division, 20, 10, 2);
  // // 20 / 10 / 2 = 1
  // const calculate = (callback, arg1, arg2, ...) => {
  //   // your code
  // };
  
  const calculate1 = (callback, arg1, arg2, ...rest) => {
    
    let result = callback(arg1, arg2, ...rest)
  
    return result
  
  };
  
  
  function addition (...rest){
    let arr = rest;
    let result = 0;
   for(let i = 0; i < arr.length; i++){
    result += arr[i]
   }
   return result;
  }
  
  const result = calculate1(addition, 1, 1, 1, 1);
  console.log(result);
  
  // function subtraction(...rest) {
  //   let arr = rest;
  //   let result = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     result -= arr[i];
  //   }
  //   return result;
  // }
  
  // const result = calculate1(subtraction, 20, 10, 5);
  // console.log(result); 
  
  
  // function multiplication(...rest) {
  //   let arr = rest;
  //   let result = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     result *= arr[i];
  //   }
  //   return result;
  // }
  
  // const result = calculate1(multiplication, 20, 10, 5);
  // console.log(result);
  
  // function division(...rest) {
  //   if (rest.length === 0) {
  //     return 0; 
  //   }
    
  //   let arr = rest;
  //   let result = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     if (arr[i] === 0) {
  //       return "Error: zero";
  //     }
  //     result /= arr[i];
  //   }
  //   return result;
  // }
  
  // const result = calculate1(division, 20, 10, 2);
  // console.log(result);
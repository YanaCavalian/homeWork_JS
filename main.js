// Factorial recursion
function factorial(num) {
    if (num === 0) return 1;
    let result = num * factorial(num - 1);
    console.log(result); 
    return result;
  }
  
  factorial(5);

  //   Fibonacci recursion
const fib = (length) => {
    if (length === 1) {
      return [1];
    } else if (length === 2) {
      return [1, 1];
    } else {
      const prevSequence = fib(length - 1);
      const nextNumber = prevSequence[prevSequence.length - 1] + prevSequence[prevSequence.length - 2];
      return [...prevSequence, nextNumber];
    }
  };
  
  const result = fib(5);
  console.log(result.join(' ')); 
  
  //Decorator
  const cachesDecorator = (func) => {
    const cache = new Map();
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache.has(key)) {
        return cache.get(key);
      } else {
        const result = func.apply(this, args);
        cache.set(key, result);
        return result;
      }
    };
  };
  
  const obj = {
    num: 1,
    result: null,
    sum(num) {
      return this.num + num;
    },
  };
  
  const sum = function (num) {
    return this.num + num;
  };
  
  const decoratedSum1 = cachesDecorator(sum.bind(obj)); 
  console.log(decoratedSum1(2)); 
  
  const decoratedSum2 = cachesDecorator(obj.sum.bind(obj));
  console.log(decoratedSum2(3)); 
  
  
  // Read List
  const list = {
    title: "lesson-1",
    next: {
      title: "lesson-2",
      next: {
        title: "lesson-3",
        next: {
          title: "lesson-4",
          next: {
            title: "lesson-5",
            next: null,
          },
        },
      },
    },
  };
  
  const readList = (list) => {
    if (list) {
      console.log(list.title);
      readList(list.next); 
    }
  };
  
  readList(list);
  
//Deep Copy (optional)
const deepCopy = (arr) => {
  if (Array.isArray(arr)) {
    return arr.map((item) => deepCopy(item));
  } else if (typeof arr === 'object' && arr !== null) {
    const copiedObj = {};
    for (const key in arr) {
      if (Object.hasOwnProperty.call(arr, key)) {
        copiedObj[key] = deepCopy(arr[key]);
      }
    }
    return copiedObj;
  } else {
    return arr;
  }
};

const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const copiedArr = deepCopy(arr);
console.log(copiedArr);


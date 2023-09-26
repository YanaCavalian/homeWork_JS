
// Return arr of numbers with values that are in range from 'from' param and to 'to' param
function filterRange(arr, from, to) {
    return arr.filter(item => item >= from && item <= to);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = filterRange(arr, 3, 7);
console.log(result);

function sortArray(arr1) {
    return arr1.sort((a, b) => a - b);
}

const arr1 = [324, 32423, -3242, 544, 0, 23, -454, 22, 4];
const sortedArr1 = sortArray(arr1);
console.log(sortedArr1);

// Sort arr of strings from shortest to longest
const arr2= ["4534", "a", "bb", "sdfds", "", " ", "r4rdv-"];

arr.sort((a, b) => a.length - b.length);

console.log(arr2);
// Calculate average age of users older then 17 and younger then 55
const arr3 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
  
  function averageAge(users) {
    const filteredUsers = users.filter(user => user.age > 17 && user.age < 55);
    
    if (filteredUsers.length === 0) {
      return 0; 
    }
  
    const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.age, 0);
    return sumOfAges / filteredUsers.length;
  }
  
  const result3 = averageAge(arr3); 
  console.log(result3); 

//   Sort arr by name if 2 elements have same name sort by age
  const arr4 = [
    { name: "John", age: 25 },
    { name: "John", age: 5 },
    { name: "John", age: 2 },
    { name: "John", age: 45 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Mary", age: 2 },
    { name: "Taras", age: 25 },
    { name: "Taras", age: 19 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Alan", age: 32 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
    { name: "Elizabeth", age: 8 },
  ];
  
  function sortUsers(users) {
    users.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
  
      return a.age - b.age;
    });
  }
  
  sortUsers(arr4);
  console.log(arr4);
//   Find min and max and return obj {min, max}
// Use reduce method
const arr5 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 29 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 74 },
    { name: "Chris", age: 14 },
    { name: "Alan", age: 5 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
  
  function minMaxAge(users) {
    if (users.length === 0) {
      return { min: undefined, max: undefined };
    }
  
    return users.reduce((acc, user) => {
      if (acc.min === undefined || user.age < acc.min) {
        acc.min = user.age;
      }
      if (acc.max === undefined || user.age > acc.max) {
        acc.max = user.age;
      }
      return acc;
    }, {});
  }
  
  const result5 = minMaxAge(arr5); 
  console.log(result5);
  
//   Save unique values from arr to uniqueArr
const strings = [
    "HELLO",
    "World",
    "JS",
    "Js",
    "HI",
    "Hello",
    "HTML",
    "CSS",
    "js",
  ];
  
  function unique(arr) {
    const uniqueArr = [];
  
    arr.forEach(item => {
      const upperCaseItem = item.toUpperCase();
  
      if (!uniqueArr.includes(upperCaseItem)) {
        uniqueArr.push(upperCaseItem);
      }
    });
  
    return uniqueArr;
  }
  
  const uniqueArr = unique(strings);
  console.log(uniqueArr);
//   Write a function called findLongestConsecutive that takes an array of numbers
// and finds the longest consecutive subarray of consecutive integers in the given array.
// For example, for the array [1, 2, 3, 4, 5, 2, 3, 4, 5], the function should return [1, 2, 3, 4, 5].
function findLongestConsecutive(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    let currentSequence = [arr[0]];
    let longestSequence = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] + 1) {
        currentSequence.push(arr[i]);
      } else {
        currentSequence = [arr[i]];
      }
  
      if (currentSequence.length > longestSequence.length) {
        longestSequence = [...currentSequence];
      }
    }
  
    return longestSequence;
  }
  
  const numbers = [1, 2, 3, 4, 5, 2, 3, 4, 5];
  const longestConsecutive = findLongestConsecutive(numbers);
  console.log(longestConsecutive); 

  
  
  
  
  
  
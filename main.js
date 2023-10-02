//     Loop though from 1 to 5
// Print number with a 1s delay
const delayedLoop = () => {
    let i = 1;
  
    const loop = () => {
      if (i <= 5) {
        console.log(i);
        i++;
        setTimeout(loop, 1000); 
      }
    };
  
    loop(); 
  };
  
  delayedLoop();
  
  // //Create a function printNumber
  // // printNumber should print numbers from 1 to 5
  // // Print each number every second
  // // Try using setTimeout and setInterval
  
  const printNumberWithInterval = () => {
    let i = 1;
  
    const intervalId = setInterval(() => {
      if (i <= 5) {
        console.log(i);
        i++;
      } else {
        clearInterval(intervalId); 
      }
    }, 1000);
  };
  
  printNumberWithInterval();
  
  //Create a function randomPromise
  // randomPromise should return promise
  // randomPromise should resolve promise if random number >= 0.5
  // randomPromise should reject promise if random number <> 0.5
  
  const randomPromise = () => {
    return new Promise((resolve, reject) => {
      const randomValue = Math.random();
  
      if (randomValue >= 0.5) {
        resolve(randomValue); 
      } else {
        reject(new Error('Promise rejected')); 
      }
    });
  };
  randomPromise()
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.error('Rejected:', error);
    });
  
    //Create a function getUserData
  // getUserData receives id as a param
  // getUserData should return promise
  // Find user by id
  // If no users found throw Error
  // Add delay for 1 second
  const users = [
    {
      id: 1,
      name: "Taras",
      age: 30,
      movies: [],
    },
    {
      id: 2,
      name: "Kate",
      age: 45,
      movies: ["Titanic", "Avatar"],
    },
  ];
  
  const getUserData = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find((user) => user.id === id);
  
        if (user) {
          resolve(user);
        } else {
          reject(new Error("404 not found"));
        }
      }, 1000); 
    });
  };
  getUserData(1)
    .then((user) => {
      console.log('User data:', user);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
//Random Resolve
const randomResolve = () => {
    return new Promise((resolve, reject) => {
      const randomDelay = Math.floor(Math.random() * 5) + 1; 
      const randomValue = Math.floor(Math.random() * 5) + 1; 
  
      console.log(`Delaying for ${randomDelay} seconds...`);
  
      setTimeout(() => {
        if (randomValue % 2 === 0) {
          resolve(`Resolved with ${randomValue}`);
        } else {
          reject(`Rejected with ${randomValue}`);
        }
      }, randomDelay * 1000);
    });
  };
  
  randomResolve()
    .then((result) => {
      console.log(result); 
    })
    .catch((error) => {
      console.error(error); 
    });

  //Promise API
  const createPromiseArr = (n) => {
    const promises = [];
  
    for (let i = 0; i < n; i++) {
      promises.push(randomResolve());
    }
  
    Promise.all(promises)
      .then((results) => {
        console.log('🥳 Yasss');
        console.log(results); 
      })
      .catch((errors) => {
        console.log('🫠🫡 ok');
        console.error(errors); 
      });
  };
  
 
  createPromiseArr(4);
  
  //Async/Await

  const randomResolve1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve('Resolved');
        } else {
          reject('Rejected');
        }
      }, Math.random() * 1000);
    });
  };
  
  const printResponse = async (n) => {
    const promises = [];
  
    for (let i = 0; i < n; i++) {
      promises.push(randomResolve());
    }
  
    try {
      const results = await Promise.all(promises);
      console.log('🥳 Yasss');
      console.log(results);
    } catch (errors) {
      console.log('🫠🫡 ok');
      console.error(errors);
    }
  };
  
  printResponse(4);
  
  //Casino (optional)
  const getRandomSeconds = () => Math.floor(Math.random() * 5) + 1;

const resolvePromiseWithDelay = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const color = value % 2 === 0 ? 'red' : 'black';
      resolve({ value, color });
    }, getRandomSeconds() * 1000);
  });
};

const casino = async (stakes) => {
  const promises = stakes.map((stake) => {
    if (stake.value === 'red') {
      return resolvePromiseWithDelay(2); 
    } else if (stake.value === 'black') {
      return resolvePromiseWithDelay(1); 
    } else {
      const number = parseInt(stake.value);
      return resolvePromiseWithDelay(number);
    }
  });

  try {
    await Promise.race(promises); 
    console.log('💵'); 
  } catch (error) {
    console.log('🫣'); 
  }
};

const stakes = [
  { value: 'red' },
  { value: 'black' },
  { value: '1' },
  { value: '2' },
  { value: '0' }
];

casino(stakes);

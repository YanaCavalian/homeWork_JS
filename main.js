//Pythagorean theorem
const pythagorean = (a, b) => {
    return Math.sqrt(a ** 2 + b ** 2);
      };
    const result = pythagorean(5, 12);
    console.log(result); 
    
    //Check if prime
    const isPrime = n => {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0) return false;
    
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
    
        return true;
    };
    console.log(isPrime(4)); 
    console.log(isPrime(5)); 
    
    //Check if number is Armstrong Number
    function isArmstrong(n) {
      const numStr = n.toString();
      const numDigits = numStr.length;
      let sum = 0;
    
      for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, 3); 
      }
    
      return sum === n;
    }
    
    console.log(isArmstrong(4));   
    console.log(isArmstrong(153));  
    
    //Show number in money format
    function formatMoney(num) {
      const sign = num >= 0 ? '+' : '-';
      const formattedNum = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      return `${sign} ${formattedNum}`;
    }
    
    console.log(formatMoney(1232323)); 
    console.log(formatMoney(-23.2132)); 
     
    //Format number in spaces
    function formatNumber(num) {
      let roundedNum = num.toFixed(3);
      let numStr = roundedNum.toString();
      numStr = numStr.replace(/\.?0+$/, '');
      let parts = numStr.split('.');
      let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      if (parts.length === 2) {
        return integerPart + '.' + parts[1];
      } else {
        return integerPart;
      }
    }
    
    console.log(formatNumber(1232323)); 
    console.log(formatNumber(1223.65378));
    
    //Write a password generator with length n
    function generatePassword(n) {
      const symbols = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_\`abcdefghijklmnopqrstuvwxyz`;
    
      let password = '';
      const symbolsLength = symbols.length;
    
      for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * symbolsLength);
        password += symbols.charAt(randomIndex);
      }
    
      return password;
    }
    
    console.log(generatePassword(15));
    
    //Calculate percentage with n numbers after dot
    const calc = (firstNum, secondNum, precision) => {
      const percentage = (secondNum * 100) / firstNum;
      return parseFloat(percentage.toFixed(precision));
    };
    
    console.log(calc(200, 50, 0));  
    console.log(calc(200, 0.14, 1));  
    
    //Get integer part of number and decimal
    const splitNumber = (num) => {
      const intPart = Math.floor(num);
      const decimalPart = (num - intPart) * 100; 
      return { int: intPart, decimal: decimalPart };
    };
    
    console.log(splitNumber(2));      
    console.log(splitNumber(2.34));   
    console.log(splitNumber(123.456)); 
    
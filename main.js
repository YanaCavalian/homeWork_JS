
// Create a function that reverses str
//  Перший вариант 
const reverse = (str) => {
    return str.split('').reverse().join('');
   };
   const reversedString = reverse("Hello");
   console.log(reversedString);
   
   
   // Create a function that reverses str
   // Другий вариант с циклом
   const reverse1 = (str) => {
       let reversedStr = '';
       for (let i = str.length - 1; i >= 0; i--) {
         reversedStr += str[i];
       }
       return reversedStr;
     };
     const reversedString1 = reverse("Hello");
     console.log(reversedString);
    
     // Create a function that counts words in sentence
   const countWords = (str) => {
       const wordsArray = str.split(' ');
       return wordsArray.length;
     };
     const sentence = "Hi my name is Taras";
     const wordCount = countWords(sentence);
     console.log(wordCount); 
     
     // Create a function that clears spaces
     const clearWhiteSpace = (str) => {
       return str.split(' ').join('');
     };
     
     const result = clearWhiteSpace("  1   2   ");
     console.log(result);
     
   //   Create a function that cuts str if it's length is bigger then max length
   // Add ... at the end if str is bigger
   const cutStr = (str, maxLength) => {
     if (str.length <= maxLength) {
       return str;
     } else {
       return str.slice(0, maxLength) + '...';
     }
   };
   
   console.log(cutStr("Hello", 5));       
   console.log(cutStr("Hello there", 5));  
   
   // Check if word reads the same from start to end
   // and from end to start
   // Return true/false
   const palindrome = (str) => {
     const cleanStr = str.toLowerCase().replace(/\s/g, '');
     const reversedStr = cleanStr.split('').reverse().join('');
     return cleanStr === reversedStr;
   };
   
   console.log(palindrome("tenet")); 
   console.log(palindrome("js"));    
//Get days in year
function getDaysInYear(year) {
  const dayYear = (new Date(year,12) - new Date(year,0))/ 1000 / 60 / 60/ 24;
   return dayYear;   
}
console.log(getDaysInYear(2021));
console.log(getDaysInYear(2020));

// Get day of a year
// Return day number from date

function getDayNumber(date){
    const year = new Date(date).getFullYear();
    const startYear = new Date(year,0,1);
    const dayNumber = (Math.round((new Date(date) - new Date(startYear))/ 1000/60/60/24)+1)
   return dayNumber;
}
console.log(getDayNumber("2023-01-12"));
console.log(getDayNumber("2023-02-26"));

//Get fiscal quarters
function getQuarters(date) {
    const today = new Date(date);
    const month = today.getMonth() + 1; 
    let quarter;
  
    if (month >= 1 && month <= 3) {
      quarter = 1;
    } else if (month >= 4 && month <= 6) {
      quarter = 2;
    } else if (month >= 7 && month <= 9) {
      quarter = 3;
    } else if (month >= 10 && month <= 12) {
      quarter = 4;
    } else {
      quarter = "Invalid";
    }
    return quarter; 
  }
  
  const result = getQuarters("2023-02-26");
  console.log(result);
  
 //Write a function to calculate date diff
 function calcDateDiff(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    
    const diffInMilliseconds = endDate - startDate;
    const millisecondsInMinute = 60 * 1000;
    const millisecondsInHour = 60 * millisecondsInMinute;
    const millisecondsInDay = 24 * millisecondsInHour;
    const millisecondsInMonth = 30 * millisecondsInDay;
    const millisecondsInYear = 365 * millisecondsInDay;
  
    if (diffInMilliseconds < millisecondsInHour) {
      const minutes = Math.floor(diffInMilliseconds / millisecondsInMinute);
      return `${minutes} minutes`;
    } else if (diffInMilliseconds < millisecondsInDay) {
      const hours = Math.floor(diffInMilliseconds / millisecondsInHour);
      const minutes = Math.floor((diffInMilliseconds % millisecondsInHour) / millisecondsInMinute);
      return `${hours} hours ${minutes} minutes`;
    } else if (diffInMilliseconds < millisecondsInMonth) {
      const days = Math.floor(diffInMilliseconds / millisecondsInDay);
      return `${days} days`;
    } else if (diffInMilliseconds < millisecondsInYear) {
      const months = Math.floor(diffInMilliseconds / millisecondsInMonth);
      return `${months} months`;
    } else {
      const years = Math.floor(diffInMilliseconds / millisecondsInYear);
      return `${years} years`;
    }
  }
  
  console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 14:20")); 
  console.log(calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30")); 
  console.log(calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30")); 
  console.log(calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30"));
  console.log(calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30")); 
  
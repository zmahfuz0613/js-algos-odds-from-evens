//ODDS FROM EVENS



const oddsFromEvens = (arr) => {
  let allNumbers = [];
  let evenNumbers = [];
  let oddNumbers = [];
  for(let i=0; i< arr.length; i++){
    let number = arr[i];
    if(number % 2 === 0){
      evenNumbers.push(number);
    }else{
      oddNumbers.push(number);
    }
  }

  allNumbers.push(...evenNumbers.sort(function(a, b){return a-b}));
  allNumbers.push(...oddNumbers.sort(function(a, b){return b-a}));

  return allNumbers;
}

//console.log(oddsFromEvens([0,1,2,3,4,5,6,7,8,9]))
console.log(oddsFromEvens([423, 322, 918, 45, 6, 79, 55]))

module.exports = {
  oddsFromEvens
}

// console.log(oddsFromEvens([423, 322, 918, 45, 6, 79, 55]))

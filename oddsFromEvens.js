//ODDS FROM EVENS
//return an array where all the even numbers occur first followed by the odd numbers. The even numbers should be from lowest to highest and the odd numbers should be from highest to lowest. For e.g.,
//input => [0,1,2,3,4,5,6,7,8,9]
//output => [ 0, 2, 4, 6, 8, 9, 7, 5, 3, 1 ]
const oddsFromEvens = (str) => {
  const even = []
  const odd = []

  for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      even.push(str[i])
    }
    else{
      odd.push(str[i])
    }
  }
  const sortEven = (a, b) => {
    return a - b
  }
  const sortOdd = (a, b) => {
    return b - a
  }
  even.sort(sortEven)
  odd.sort(sortOdd)
  console.log(even, odd)
  return even.concat(odd)
}

console.log(oddsFromEvens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))

module.exports = {
  oddsFromEvens
};

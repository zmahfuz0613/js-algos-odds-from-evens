let algos = require("../oddsFromEvens.js");

//ODDS FROM EVENS
//return an array where all the even numbers occur first followed by the odd numbers. The even numbers should be from lowest to highest and the odd numbers should be from highest to lowest. For e.g.,
//input => [0,1,2,3,4,5,6,7,8,9]
//output => [ 0, 2, 4, 6, 8, 9, 7, 5, 3, 1 ]
test("return an array where even numbers come first in ascending order and odd numbers are in descendng order", () => {
  expect(algos.oddsFromEvens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).toMatchObject([
    0,
    2,
    4,
    6,
    8,
    9,
    7,
    5,
    3,
    1
  ])
})

  
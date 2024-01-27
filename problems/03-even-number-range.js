/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two
    arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2, nums = []) {
  if (num1 > num2) {
    return nums;
  }

  if (num1 === num2) {
    if (num1 % 2 === 0) {
      nums.push(num1);
    }
    return nums;
  }

  if (num1 < num2) {
    if (num1 % 2 === 0) {
      let newNum = num1;
      nums.push(newNum);
    }
    num1++;
    return evenNumberRange(num1, num2, nums);
  }

  return "something went wrong";
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = evenNumberRange;
} catch (e) {
  module.exports = null;
}

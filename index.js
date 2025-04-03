function hasTargetSum(array, target) {
  // Write your algorithm here
  if(!Array.isArray(array)) return false;
  if(isNaN(target)) return false;

  for(let i=0;i<array.length;i++){
    for(let j=i+1 ;j <array.length; j++){
      const sum = array[j] + array[i];
      if(sum === target){
        return true;
      }
    }
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  function takes two arguments an array and an expected outcome, 
  the function should return true if the two items of the arry sum 
  to the expected outcome and return false if no two items sum is equal 
  to the outcome.
*/
/*
  Add written explanation of your solution here
  iterate over the array
    remove the item from array
    iterate over the new array and use each of the item to compute sum with orginal item 
      sum the two values
      compare the two values
      if outcome is equal to sum return true
      if outcome is not equal proceed with iteration
    if no result found return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

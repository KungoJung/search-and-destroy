'use strict';
console.log("----------------------------------------")


// Complete this algo
const minJumps = arr => {
  // counter to keep track of the jumps thus far
  let jumps = 0;
  // current index we're on
  let currentIdx = 0;
  console.log("CURRENT INDEX>>>>>>>>", currentIdx)

  // looping through the array while we're still approaching the right-most element
  while (currentIdx < arr.length-1) {
    // is the end within reach?
    if (arr[currentIdx] >= (arr.length-1) - currentIdx) {
      jumps++;
      console.log("______________TOTAL JUMPS:", jumps, "________________")
      return jumps;
    }
    // pass a subsection of the array to resolve the move forward with the best potential gains
    const furthestIdx = currentIdx+arr[currentIdx];
    console.log("FURTHEST AVAILABLE INDEX >>>>>>>>>", furthestIdx )
    console.log("args for best gains:", arr.slice(currentIdx+1, furthestIdx+1))
    const indexesToJump = bestGains(arr.slice(currentIdx+1, furthestIdx+1));
    currentIdx += indexesToJump;
    console.log("New Current Index >>>>>>> ", currentIdx)
    jumps++;
    console.log("TOTAL JUMPS >>>>>>", jumps)
  }
  // use a helper func to determine the best real estate option -- nested loop that returns the index that offers the best future index gains
  // set current idx to that idx and increment counter

};

const bestGains = (subArray) => {
  console.log("Is SubArray the same? >>>>>>>>", subArray)
  // default best is the final elem in the subArray
  let lastIdx = subArray.length-1;
  let best = {
    indexGain: subArray[lastIdx] + subArray.length,
    value: subArray[lastIdx],
    i: lastIdx
  }
  console.log("Starting Best (last elem in subArray >>>>>>>", best)

  // Loop backwards to see if there's an opportunity for greater index gain
  for (let i = subArray.length-2; i >= 0; i--) {
    // the current index gain opportunity  is the total of how far along the subArray we are, plus the value stored at the current element in the subArray
    let value = subArray[i]
    let indexGain = value + i;
    console.log("CURRENT INDEX GAIN OPPORTUNITY >>>>>>>", indexGain)
    // If that's greater than current best indexGain, we set best to the current values:
    if (indexGain > best.indexGain) {
      best = {indexGain, value, i};
      console.log("NEW BEST GAINS >>>>>>>>>>>>", best)
    }
  }
  // the first idx in this subArray is at subArray[0], but in the main func, it's +1 from the currentIdx
  return best.i + 1;
}


module.exports = minJumps

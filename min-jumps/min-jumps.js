'use strict';
console.log("----------------------------------------")


// Complete this algo
const minJumps = arr => {
  // counter to keep track of the jumps thus far
  let jumps = 0;
  // current index we're on
  let currentIdx = 0;
  console.log("CURRENT INDEX>>>>>>>>", currentIdx)

  // looping through the array > while current index < arr.length -1
  while (currentIdx < arr.length-1) {
    // is the end within reach?
    if (arr[currentIdx] >= (arr.length-1) - currentIdx) {
      jumps++;
      console.log("______________TOTAL JUMPS:", jumps, "________________")
      return jumps;
    }
    // pass a subsection of the array to best gains
    const furthestIdx = currentIdx+arr[currentIdx];
    console.log("FURTHEST AVAILABLE INDEX >>>>>>>>>", furthestIdx )
    console.log("args for best gains:", arr.slice(currentIdx+1, furthestIdx+1))
    const jumpsToMake = bestGains(arr.slice(currentIdx+1, furthestIdx+1));
    currentIdx += jumpsToMake;
    console.log("New Current Index >>>>>>> ", currentIdx)
    jumps++;
    console.log("TOTAL JUMPS >>>>>>", jumps)
  }
  // use a helper func to determine the best real estate option -- nested loop that returns the index that offers the best future index gains
  // set current idx to that idx and increment counter

};

const bestGains = (subArray) => {
  console.log("Is SubArray the same? >>>>>>>>", subArray)
  let best = {
    indexGain: subArray[subArray.length-1] + subArray.length,
    value: subArray[subArray.length-1],
    i: subArray.length-1
  }

  console.log("Starting Best (last elem in subArray >>>>>>>", best)

  for (let i = subArray.length-2; i >= 0; i--) {
    // the current opportunity  is the total of how far along the subArray we are, plus the value stored at the current element in the subArray
    let value = subArray[i]
    let indexGain = value + i;
    console.log("CURRENT INDEX GAIN OPPORTUNITY >>>>>>>", indexGain)
    // If that's greater than maxGains, we set maxGains to it
    if (indexGain > best.indexGain) {
      best = {indexGain, value, i};
      console.log("NEW BEST GAINS >>>>>>>>>>>>", best)
    }
  }
  // we return the index + 1 because the indexes in the subArray start from idx -0-, but in the minJumps function, the 0th elem of the subArray is a gain of 1 from the current index we're jumping from
  return best.i + 1;
}


module.exports = minJumps

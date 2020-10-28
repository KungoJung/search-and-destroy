"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  let hashForwards = new Map();
  let hashBackwards = new Map();
  let currentNodeForwards = linkedlist.head;
  let currentNodeBackwards = linkedlist.tail;

  while (currentNodeForwards && currentNodeBackwards) {
    // console.log(
    //   "This is the hashBackwards Value ",
    //   hashBackwards[currentNodeBackwards.value]
    // );
    // console.log("This is the previous ", currentNodeBackwards.previous);
    // console.log(
    //   "This is the hashForwards Value ",
    //   hashForwards[currentNodeForwards.value]
    // );
    if (
      hashForwards[currentNodeForwards.value] === currentNodeForwards.next ||
      hashBackwards[currentNodeBackwards.value] ===
        currentNodeBackwards.previous
    ) {
      return true;
    } else {
      hashForwards[currentNodeForwards.value] = currentNodeForwards.next;
      currentNodeForwards = currentNodeForwards.next;
      hashBackwards[currentNodeBackwards.value] = currentNodeBackwards.previous;
      currentNodeBackwards = currentNodeBackwards.previous;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

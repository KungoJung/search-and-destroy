'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	if (array.length == 1 && array[0] !== target) return false
	const midpoint = Math.floor(array.length / 2)

	if (array[midpoint] === target) return true;
	else if (array[midpoint] > target) {
		return binarySearch(array.slice(0, midpoint), target)
	} else if (array[midpoint] < target) {
		return binarySearch(array.slice(midpoint), target)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch

function combineArrays(arr1: number[], arr2: number[]): number[] {
  // Type Guard to check if all elements in arr2 are numbers
  const isAllNumbers = arr2.every(element => typeof element === 'number');

  if (!isAllNumbers) {
    throw new Error('All elements in arr2 must be numbers.');
  }

  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 

const combined = combineArrays(arr1, arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6] 
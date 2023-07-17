import swapBars from './swapBars';

async function quickSort(arr, start, end, setArray, setSwappingIndices, setSortedIndices, speed) {
  if (start >= end) {
    return;
  }

  const pivotIndex = await partition(arr, start, end, setArray, setSwappingIndices, setSortedIndices, speed);
  await quickSort(arr, start, pivotIndex - 1, setArray, setSwappingIndices, setSortedIndices, speed);
  await quickSort(arr, pivotIndex + 1, end, setArray, setSwappingIndices, setSortedIndices, speed);
}

async function partition(arr, start, end, setArray, setSwappingIndices, setSortedIndices, speed) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  setSortedIndices([]);
  setSwappingIndices([pivotIndex]);

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swapBars(arr, i, pivotIndex, setArray, setSwappingIndices, speed);
      pivotIndex++;
    }
  }

  await swapBars(arr, pivotIndex, end, setArray, setSwappingIndices, speed);

  setSwappingIndices([]);
  setSortedIndices([pivotIndex]);

  return pivotIndex;
}

const QuickSort = async (arr, setArray, setSwappingIndices, setSortedIndices, speed) => {
  const arrayCopy = [...arr];
  await quickSort(arrayCopy, 0, arrayCopy.length - 1, setArray, setSwappingIndices, setSortedIndices, speed);
  setArray(arrayCopy);
  setSortedIndices([...Array(arrayCopy.length).keys()]);
};

export default QuickSort;

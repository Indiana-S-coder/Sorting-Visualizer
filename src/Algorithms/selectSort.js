import swapBars from './swapBars';

async function SelectionSort(array, setArray, setSwappingIndices, setSortedIndices, speed) {
  const sortedBars = [...array];
  const n = array.length;

      for (let i = 0; i < n - 1; i++) {
        let minPos = i;
        for (let j = i + 1; j < n; j++) {
          if (sortedBars[minPos] > sortedBars[j]) {
            minPos = j;
          }
        }
        await swapBars(sortedBars, minPos, i, setArray, setSwappingIndices, speed);
      }
      setSortedIndices([...Array(n).keys()]);
};

export default SelectionSort;


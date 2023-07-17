import swapBars from "./swapBars";

async function BubbleSort(array, setArray, setSwappingIndices, setSortedIndices, speed) {
    const sortedBars = [...array];
    const n = array.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < n - 1; i++) {

        if (sortedBars[i] > sortedBars[i + 1]) {
          await swapBars(sortedBars, i, i + 1, setArray, setSwappingIndices, speed);
          swapped = true;
        }
      }
    } while (swapped);

    setSortedIndices([...Array(n).keys()]);
}

export default BubbleSort;
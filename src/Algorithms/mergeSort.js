
async function mergeSort(array, setArray, setSwappingIndices, setSortedIndices) {
  const merge = async (left, right, start, end) => {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        mergedArray.push(left[i]);
        i++;
      } else {
        mergedArray.push(right[j]);
        j++;
      }
    }
  
    while (i < left.length) {
      mergedArray.push(left[i]);
      i++;
    }
  
    while (j < right.length) {
      mergedArray.push(right[j]);
      j++;
    }
  
    const updatedArray = [...array];
    let animationDelay = 50;
    for (let k = start; k <= end; k++) {
      updatedArray[k] = mergedArray[k - start];
      setArray([...updatedArray]);
      setSwappingIndices([k]);
      await new Promise((resolve) => setTimeout(resolve, animationDelay));
    }
  
    for (let k = 0; k < mergedArray.length; k++) {
      array[start + k] = mergedArray[k];
    }
    
    setArray([...array]);
    setSwappingIndices([]);
    setSortedIndices([...Array(end - start + 1).keys()].map((i) => i + start));
  
    return mergedArray;
  };
  

  const performMergeSort = async (arr, start, end) => {
    if (start >= end) {
      return [arr[start]];
    }

    const mid = Math.floor((start + end) / 2);

    const left = await performMergeSort(arr, start, mid);
    const right = await performMergeSort(arr, mid + 1, end);

    return merge(left, right, start, end);
  };

  setSortedIndices([]);
  const sortedArray = await performMergeSort(array, 0, array.length - 1);
  setArray(sortedArray);
  setSortedIndices([...Array(sortedArray.length).keys()]);
}

export default mergeSort;



/*import React, { useEffect } from 'react';

async function mergeSort(arr, start, end, setArray, setSwappingIndices, setSortedIndices, speed) {
  if (start >= end) {
    return [arr[start]];
  }

  const mid = Math.floor((start + end) / 2);

  const left = await mergeSort(arr, start, mid, setArray, setSwappingIndices, setSortedIndices, speed);
  const right = await mergeSort(arr, mid + 1, end, setArray, setSwappingIndices, setSortedIndices, speed);

  return await merge(left, right, start, end, setArray, setSwappingIndices, setSortedIndices, speed);
}

async function merge(left, right, start, end, setArray, setSwappingIndices, setSortedIndices, speed) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      mergedArray.push(left[i]);
      i++;
    } else {
      mergedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    mergedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    mergedArray.push(right[j]);
    j++;
  }

  const updatedArray = [...mergedArray];
  let animationDelay = speed;
  for (let k = start; k <= end; k++) {
    setArray([...updatedArray]);
    setSwappingIndices([k]);
    await new Promise((resolve) => setTimeout(resolve, animationDelay));
  }

  setSwappingIndices([]);
  setSortedIndices([...Array(end - start + 1).keys()].map((i) => i + start));

  return mergedArray;
}

const MergeSort = ({ array, setArray, setSwappingIndices, setSortedIndices }) => {
  useEffect(() => {
    const performMergeSort = async () => {
      setSortedIndices([]);
      const sortedArray = await mergeSort(array, 0, array.length - 1, setArray, setSwappingIndices, setSortedIndices, 10);
      setArray(sortedArray);
      setSortedIndices([...Array(sortedArray.length).keys()]);
    };

    performMergeSort();
  }, [array, setArray, setSwappingIndices, setSortedIndices]);

  return null;
};

export default MergeSort;
*/
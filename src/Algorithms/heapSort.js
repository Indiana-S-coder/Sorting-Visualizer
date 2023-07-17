import swapBars from "./swapBars";

async function HeapSort(array, setArray, setSwappingIndices, setSortedIndices, speed) {
    const len = array.length;
  
    // Build max heap
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      await heapify(array, len, i, setArray, setSwappingIndices, speed);
    }
  
    // Extract elements from the heap one by one
    for (let i = len - 1; i > 0; i--) {
      // Move the current root (maximum element) to the end
      await swapBars(array, 0, i, setArray, setSwappingIndices, speed);
  
      // Heapify the reduced heap
      await heapify(array, i, 0, setArray, setSwappingIndices, speed);
    }
  
    // Set sorted indices
    setSortedIndices(Array.from({ length: len }, (_, index) => index));
  
    return array;
  }
  
  async function heapify(array, len, root, setArray, setSwappingIndices, speed) {
    let largest = root;
    const left = 2 * root + 1;
    const right = 2 * root + 2;
  
    // Check if left child is larger than root
    if (left < len && array[left] > array[largest]) {
      largest = left;
    }
  
    // Check if right child is larger than current largest
    if (right < len && array[right] > array[largest]) {
      largest = right;
    }
  
    // If largest is not the root, swap elements and heapify the affected subtree
    if (largest !== root) {
      await swapBars(array, root, largest, setArray, setSwappingIndices, speed);
      await heapify(array, len, largest, setArray, setSwappingIndices);
    }
  }
  
export default HeapSort;  
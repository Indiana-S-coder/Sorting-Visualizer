async function swapBars(barsArray, indexA, indexB, setArray, setSwappingIndices, speed) {
    return new Promise((resolve) => {
      setTimeout(() => {
        [barsArray[indexA], barsArray[indexB]] = [barsArray[indexB], barsArray[indexA]];
        setArray(barsArray);
        setSwappingIndices([indexA, indexB]);
  
        setTimeout(() => {
          setSwappingIndices([]);
          resolve();
        }, speed);
      }, speed);
    });
  }
  export default swapBars
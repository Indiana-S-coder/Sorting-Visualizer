
import swapBars from "./swapBars";

async function InsertionSort(array, setArray, setSwappingIndices, setSortedIndices, speed) {
    const sortedBars = [...array];
    const n = array.length;

    for(let i=0; i<n; i++){
        for(let j=i+1; j>0; j--){
            if(sortedBars[j]<sortedBars[j-1]){
                await swapBars(sortedBars, j-1, j, setArray, setSwappingIndices, speed);
            }
            else break;
        }
    }
    setSortedIndices([...Array(n).keys()]);
}

export default InsertionSort
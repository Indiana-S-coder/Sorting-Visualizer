import React, {useState, useEffect} from "react";
import './barGenerator.css';
import BubbleSort from "../Algorithms/bubbleSort";
import InsertionSort from "../Algorithms/insertSort";
import SelectionSort from "../Algorithms/selectSort";
import MergeSort from "../Algorithms/mergeSort";
import QuickSort from "../Algorithms/quickSort";
import HeapSort from "../Algorithms/heapSort";

function BarGenerator() {
    const [array, setArray] = useState([]);
    const [swappingIndices, setSwappingIndices] = useState([]);
    const [sortedIndices, setSortedIndices] = useState([]);

    const [arraySize, setArraySize] = useState(100);
    const [speed, setSpeed] = useState(50);
    const maxHeight = 500;

    useEffect(() => {
        resetArray();
    },[arraySize]);

    const resetArray = () => {
        const array = [];
        for(let i=0; i<arraySize; i++){
            array.push(randomNum(10, maxHeight));
        }
        setArray(array);
        setSortedIndices([]);
        setSwappingIndices([]);
    }
    
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    };

    const bubbleSort = async () => {
        await BubbleSort(array, setArray, setSwappingIndices, setSortedIndices, actualDelay);
    }
    
    const insertSort = async () => {
        await InsertionSort(array, setArray, setSwappingIndices, setSortedIndices, actualDelay);
    }

    const selectSort = async () => {
        await SelectionSort(array, setArray, setSwappingIndices, setSortedIndices, actualDelay);
      };
    
    const mergeSort = async () => {
        await MergeSort(array, setArray, setSwappingIndices, setSortedIndices);
    };

    const quickSort = async () => {
      await QuickSort(array, setArray, setSwappingIndices, setSortedIndices, actualDelay);
    };

    const heapSort = async () => {
      await HeapSort(array, setArray, setSwappingIndices, setSortedIndices, actualDelay);
    };

    const handleSpeedChange = (event) => {
      setSpeed(101-parseInt(event.target.value));
    };
    
    const calculateDelay = () => {
        return 10000/(Math.floor(arraySize/10)*speed);
        // return 1/(Math.floor(arraySize/10)*speed);
    };
    const actualDelay = calculateDelay();

    const handleArraySizeChange = (event) => {
      setArraySize(parseInt(event.target.value));
    };

    const calcBarWidth = () => {
        return `${500/arraySize}px`;
    }
    // const arraysAreEqual = (arr1, arr2) => {
    //     const l1 = arr1.length;
    //     const l2 = arr2.length;
    //     if(l1 !== l2)return false;
    //     for(let i=0; i<l1; i++){
    //         if(arr1[i]!==arr2[i])return false;
    //     }
    //     return true;
    // }
    return (
      <div className="container">
         <div className="wrapper">
            <div>
             <h1>Sorting Visualizer</h1>
            </div>
            <div className="elements">
                <div className="slider-container">
                    <div className="sliders">    
                    <div className="size-slider">
                        <span>Speed: </span>
                        <input className="slider"
                          type="range"
                          min="1"
                          max="10000"
                          step="10"
                          value={101-speed}
                          onChange={handleSpeedChange}
                          />
                    </div>
                    <div className="size-slider">
                        <span>Array Size: </span>
                        <input className="slider"
                          type="range"
                          min="10"
                          max="150"
                          value={arraySize}
                          onChange={handleArraySizeChange}
                          />
                    </div>
                </div>
                    <div id="generate-btn">
                        <button className="btn" onClick={resetArray}>Generate New Array</button>
                    </div>
                </div>
                    <div className="btn-container">
                        <button className="btn" onClick={bubbleSort}>
                            Bubble sort
                        </button>
                        <button className="btn" onClick={insertSort}>
                            Insertion sort
                        </button>
                        <button className="btn" onClick={selectSort}>
                            Selection Sort
                        </button>
                        <button className="btn" onClick={mergeSort}>
                            Merge Sort
                        </button>
                        <button className="btn" onClick={quickSort}>
                            Quick Sort
                        </button>
                        <button className="btn" onClick={heapSort}>
                            Heap Sort
                        </button>
                    </div>
            </div>
        </div>
        
            <div className="array-container">
            { 
                array.map((value, idx) => (
                <div className={`array-bar ${swappingIndices.includes(idx) ? 'swap':''} ${sortedIndices.includes(idx)?'sorted':''}`} key={idx} style={{height: `${value}px`, width: calcBarWidth()}}>
                </div>
            ))
            }
            </div>
      </div>
    );
}

export default BarGenerator;
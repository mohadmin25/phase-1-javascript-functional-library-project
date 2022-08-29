function standardizeInput(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }
  function myEach(collection, callback) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      callback(newCollection[idx]);
    }
    return collection;
  }
    
  function myMap(collection, callback) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      newArr.push(callback(newCollection[idx]));
    }
    return newArr;
  }
    
  function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);
      // for the accumulator, If acc is null, it is set equal to the first value in newCollection then sliced
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  }
    
  function myFind (collection, predicate) {
    const newCollection = standardizeInput(collection);
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
    return undefined;
  }
    
  function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);
    const newArr = [];
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
    return newArr;
  }
    
  function mySize(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length;
  }
    
  // Array Functions
  function myFirst(arr, stop=false) {
    return (stop) ? arr.slice(0, stop) : arr[0];
  }
  function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
  }
  function mySortBy(arr, callback) {
    const newArr = [...arr];
    return newArr.sort(function(a, b) {
      if (callback(a) > callback(b)) {
        return 1;
      } else if (callback(b) > callback(a)) {
        return -1;
      } else {
        return 0;
      }
    });
  }
    
  // It takes each element of the input array (whether it's a primitive value or an array) and pushes it into the output array
  function unpack(receiver, arr) {
    for (let val of arr) {
      receiver.push(val);
    }
  }
    
  //it hanndles shallow=true and shallow=false
  function myFlatten(collection, shallow, newArr=[]) {
    if (shallow) {
      for (let val of collection) {
        Array.isArray(val) ? unpack(newArr, val) : newArr.push(val);
      }
    } else {
      // shallow = false (recursive case)
      for (let val of collection) {
        if (Array.isArray(val)) {
          // Below, we pass newArr as an argument when we call myFlatten recursively because we need to retain the values that were pushed in previous calls
          myFlatten(val, false, newArr);
        } else {
          newArr.push(val);
        }
      }
    }
    return newArr;
  }
   
  // Object Functions
  function myKeys(obj) {
    const keys = [];
    for (let key in obj){
      keys.push(key);
    }
    return keys;
  }
    
  function myValues(obj) {
    const values = [];
    for (let key in obj){
      values.push(obj[key]);
    }
    return values;
    
  }
  Footer
  
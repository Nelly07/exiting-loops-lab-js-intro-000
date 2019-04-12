function breakOut(array, changeValue, stopValue){
  for ( let i=changeValue; i<array.length; i++){
    array[array.length]=(changeValue)
    if (changeValue[i] === stopValue[i]) {
      break
    }
  return array;
  }
}

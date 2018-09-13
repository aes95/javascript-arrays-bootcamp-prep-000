var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, element){
<<<<<<< HEAD
  return [element, ...arr];
}
function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element);
  return array
}
function addElementToEndOfArray(array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray (array, element){
  array.push(element);
  return array
}

function accessElementInArray(array, index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1);
}
//var array = [1]
//console.log(destructivelyAddElementToBeginningOfArray(array, 'foo'))
//console.log(array)
=======
  var res = [element, ...arr]
  return res
}

function destructivelyAddElementToBeginningOfArray (array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  var res = [...array, element]
  return res
}

function destructivelyAddElementToEndOfArray (array, element){
  return array.push(element)
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}
function removeElementFromBeginningOfArray(array){
  return array.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}
function removeElementFromEndOfArray(array){
  return array.slice(0, array.length -1)
}
console.log(destructivelyAddElementToBeginningOfArray([1], 'foo'))
>>>>>>> 9d183a3699439e1ed78a7ca95669564a525ddd32

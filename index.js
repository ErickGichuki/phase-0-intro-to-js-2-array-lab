// Write your solution here
const cats =["Milo","Otis","Garfield"];

function appendCat(name){
   const newArray = cats.slice();
    newArray.push(name);
    return newArray
}
function prependCat(name){
    const newArray = cats.slice();
    newArray.unshift(name)
    return newArray
}
function destructivelyAppendCat(name){
    cats.push(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}
function appendCat(name){
    const newArray = cats.slice();
    newArray.push(name)
    return newArray
}
function removeFirstCat(name){
    const newArray = cats.slice();
    newArray.shift()
    return newArray
}
function removeLastCat(name){
    const newArray = cats.slice();
    newArray.pop()
    return newArray
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}

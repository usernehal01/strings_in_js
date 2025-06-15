//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
    const ary = new Array("abc",21,"21",3333);
    console.log(ary);
    
//? Using array literal
    const arry = ["abc",21,"21",3333];
    console.log(arry);
    
//? we can also create an empty array
    const emp = new Array();
    const emp2 = [];
    console.log(emp);
    console.log(emp2);
    
//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
    console.log(arry[1]);
    console.log(arry.at(-1)); // error we we use .at
    
//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays
let fruits1 = ["apple","orange","mango","banana","grapes"];

for(let i=0;i<fruits1.length;i++){
    console.log(fruits1[i]); //basic loops;
    
}
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

for(let item of fruits1){
    console.log(item);
}

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

for(items in fruits1){
    console.log(items);
    
}

// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

let fruits12 = ["apple","orange","mango","banana","grapes"];

fruits12.forEach((curEle,index,arr)=>{
    //console.log(`${curEle} ${index}`);
    // console.log(arr);
    
    // arrayName.forEach(callbackFunction)
})

const myForChar = fruits12.forEach((cur,index,arr)=>{
    return `${cur} ${index}`
})
console.log(myForChar); //return keyword use nhi krskte;




// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

let fruits11 = ["apple","orange","mango","banana","grapes"];
const myMapChar = fruits11.map((currentEle,index,arr)=>{
    // console.log(`${currentEle} ${index}`);
    return `${currentEle} ${index}`
    
})

console.log(myMapChar);

//map me return hoskta hai lein foreach me nhi


//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

let numbers = [1,2,3,4,5,6]
numbers.forEach((curElem)=>{
    console.log(curElem*2);
})

// const map1 = numbers.map((curElem)=>{
//     console.log(curElem*2);
// })

// console.log(map1);  //this will return undef so we have to return them;
let numbers1 = [1,2,3,4,5,6]
const map1 = numbers1.map((curElem)=>{
    return curElem*2;
})

console.log(map1); //creates array

//* key differences
//! return value:
//? forEach : it doesn't return a value the foreach method is used for iterating over the element of a array and performing side effect such a modifying the array or performing a task for each element

//? map: it returns a new array containing the results of applying a function to each element in the original array the original array remains unchanged

//! chaining 
//? forEach: it doesn't return a value so it cant be directly chained with array methods;

//? map : it returns array so we can chain it with other array methods

//* use case
//?forEach : used when you want to iterate over the array elements and perform an action on each element but don't need a new array

//? map: used when you want to create a new array based on the transformation of each element in the original array;



//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.
let arr1 = [1,2,3,4,5];
arr1.push("abc");
console.log(arr1);

//? 2: pop(): Method that removes the last element from an array.
let arr2 = [1,2,3,4,5];
arr2.pop();
console.log(arr2);

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
let arr3 = [1,2,3,4,5];
arr3.unshift(32);
console.log(arr3);

//? 4: shift(): Method that removes the first element from an array.
arr3.shift();
console.log(arr3);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
let fruitsN = ["apple", "orange", "banana", "mango"];
// fruitsN.splice(1,2);
// console.log(fruitsN);
fruitsN.splice(1,1,"grapes") //orange ki jagah grapes
console.log(fruitsN);


//! what if you want to add the element at the end
let fruitsN1 = ["apple", "orange", "banana", "mango"];
//using -1
fruitsN1.splice(-1 ,0 , "papaya"); //last element pr jana hai, kuch bhi delete nhi karna hai
console.log(fruitsN1);



//todo Challenge time
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

const months = ["Jan", "march", "April", "June", "July"];
months.splice(months.length,0,"dec")
console.log(months);

// months.splice(1,1,"March");
const indexToUpdate = months.indexOf("march");
months.splice(indexToUpdate,1,"March");
console.log(months);


const months1 = ["Jan", "march", "April", "June", "July"];
const indexToDelete = months1.indexOf("June")
months1.splice(indexToDelete,1);
console.log(months1);


 //* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers4.indexOf(5));
//5 is present on 4th index
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 6, 9];
console.log(numbers5.indexOf(6));
console.log(numbers5.lastIndexOf(6));



//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
const numbers12  = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

const result1 = numbers12.find((curEle)=>{
   return curEle < 5;
})

console.log(result1);


//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

const myArray = [1,2,3,4,5,6,7,8,44];
const myFindIndexMethod = myArray.findIndex((e)=>{
    return e>5;
})

console.log(myFindIndexMethod);

const result11 = myArray.map((curEle)=>{
    curEle*5;
    
})

const result12 = myArray.findIndex((curEle)=>{
    return curEle > 15;

})

console.log(result12);



//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
const myArray2 = [1,2,3,4,5,6,7,8,8,9,32,22];
const myFilterMethod = myArray2.filter((curEle)=>{
    return curEle >=1;
})

console.log(myFilterMethod);


//? filter(callbackFn, thisArg)

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
let value = 6;
const numbers123 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

let updatedCart = numbers123.filter((curElem)=>{
    return curElem !== value;
})
console.log(updatedCart);

// Practice time
// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500
let updatedProducts = products.filter((curEle)=>{
    return curEle.price <= 500;
})
console.log(updatedProducts);

// //! Filter unique values
const numbers11 = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
console.log(...new Set([numbers11]));


let uniqueValue = numbers11.filter((curElem,index,arr)=>{
   return arr.indexOf(curElem) === index;
    
})

console.log(uniqueValue);


//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

const fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.sort();
console.log(fruits)

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.


// Original array of numbers
const numbers0 = [1, 2, 3, 4, 5]

//! Using map to square each number and create a new array
let res = numbers0.map((curElem,index,array)=>{
    return curElem * curElem;
})

console.log(res);


//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

const MyArray =[1,2,3,4,5];
const reducedVal = MyArray.reduce((curEle)=>{
    return curEle;
})

console.log(reducedVal);


// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

//! using map method print all string values capitalzed
const monthsAgain = ["june","july","august"];
const capMonthsAgain = monthsAgain.map((curElem)=>{
    return curElem.toUpperCase();
})

console.log(capMonthsAgain);

//! using map method print squares of the even values;
const num = [1,2,3,4,5,6,7,8,9,334];
const updatedNum = num.map((curElem,index,array)=>{
    if(curElem%2===0) return curElem * curElem;
});// gives undefined ;
console.log(updatedNum);

//to avoid this we will use filer method

const num111 = [1,2,3,4,5,6,7,8,9,334];
const updatedNum1 = num111.map((curElem,index,array)=>{
    if(curElem%2===0) return curElem * curElem;
}).filter((curElem)=>{
    return curElem !== undefined;
})

console.log(updatedNum1);

//! using map method take array of names and return a new array where each name is prefixed with Mr;

const name1 = ['abc','ram','sita','honey']
const prefixName = name1.map((curElem)=>{
    return `Mr. ${curElem}`
});

console.log(prefixName);

//? reduce method is used in ecommerce todo cart, accumulator extra add hojata hai boss

//!write a js fn that calc total price of items in a shopping cart. the function should take array of item prices as input and return the total;

const data = [1,2,3,4,5];
const finalData = data.reduce((accum,curElem)=>{
    return accum+curElem;
    //0 0+1 0+1+2 0+1+2+3 0+1+2+3+4 0+1+2+3+4+5;
},0);

console.log(finalData);

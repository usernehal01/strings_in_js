//? STRINGS in js are fundamental data that represents a sequence

//note;
//strings created with single or double quotes works the same;
//there is no difference between the two

//* String properties
//? length : property that returns the length of the string(number of characters)

const str = "hello world";
console.log(str);

//* =============================================ESCAPE SEQUENCES =============================================

//? ESCAPE character in javascript the backslash \ is used a as an escape character

//code      result         description
//\'        '            single quote
//\"        "            double quote
//\\        \             backslash  


let text = "my name is \'nehal' and i am a full stack \"developer"
console.log(text);


//* string search methods
//? indexOf(): the indexOf() method returns the index of the first occurrence of a string in  a string or it returns -1 if the string is not found;

//syntax 
//!indexOf(searchString)
let text1 = "nehal"
console.log(text1.indexOf("eh"));

//!indexOf(searchString,position)


//!lastindexof()
let text2 = "nehalee"
console.log(text2.lastIndexOf("e"));

//!array from
//? converts string into array
let text3 = "nehalchaudhary"
let strArr = Array.from(text3)
console.log(strArr);

let strMap = strArr.map((currElem,index)=>{
    return `${currElem}-${index}`;
})

console.log(strMap);


//! includes method
//? returns true if value is included else it wont
console.log(text3.includes("ehas"));//false
console.log(text3.includes("eha"));//true

//! match() : returns an array of the matched values or null if no match is found
let text12 = "Hello JavaScript welcome to our world best JavaScript course";
let result = text12.match('Javascript') //? null
let result1 = text12.match('JavaScript')
console.log(result);
console.log(result1); //? returns array 
//ans
//? [
//?     'JavaScript',
//?     index: 6,
// ?    input: 'Hello JavaScript welcome to our world best js course',
//?     groups: undefined
//?   ]


//? returns null when we have a unmatched value in it

// todo : here the js converts text into regular expression text.match(/javascript/); without the g flag

let res = text12.match(/JavaScript/g);
console.log(res);


//! matchAll() : returns an iterator of all matches providing detailed information about each match returns an empty iterator if no match is found

let text11 = "Hello JavaScript welcome to our world best JavaScript course";

let matchAllText = text11.matchAll('JavaScript')
console.log(matchAllText);

//jab aap is tarike se hota kya hai js normal string ko regular expression me convert krra hai

//iterator array like object array as object ko yaad krlo 

for(let item of matchAllText){
    console.log(item.index);
    
}

//! startsWith(): returns true if strings begins with a specified value;

let abc = "neheheh";
console.log(abc.startsWith('n'));

//* start position can be specified:
console.log(abc.startsWith('nn',2));

//! endsWith(): returns true if string ends with a specific value determined;
console.log(ends);

//! slice method 
let name1 = "vinod thapa"
let splicedName = name1.slice(6,9);
console.log(splicedName);

//! substring : extracts a part of string and returns 

let sub = name1.substring(3,9);
console.log(sub);

//!replace method : replaces the existing string with mentioned value;

let text4 = "hello world , how are you today world";
let replacedString = text4.replace("world","me");
let replacedAllString = text4.replaceAll("world","me");
console.log(replacedString);
console.log(replacedAllString);

//! toUpperCase toLowerCase : converts string into desired method;

const str1 = "hello"
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());


//! trim : removes white space from both the ends 
const str2 = "     hello woororl       ";
console.log(str2.trim())


//! split : splits the string into an array of substrings based on specified delimiter

const str3 = "apple,banana,grapes,apple";
console.log(str3.split(','));
console.log(str3.split(''));


//* Write a js fun that prints the letters 'a' through 'z' in the console. you should loop to iterate through the letter and print each one on a new line

//! using charCodeAt 
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

for(let i=97;i<=122;i++){
    console.log(String.fromCharCode(i));
    
}

//! write a function to check if all the vowels present in  a string or not;

const check = (str)=>{
    const vowels = 'aeiou'
    for(let char of vowels){
        if(!str.includes(char)){
            return false
        }
    }
    return true;
}

console.log(check("the quick lazy fox jumps over the dog"));


//! write the count of the vowels 
const check1 = (str)=>{
    let count = 0
    const vowels = 'aeiou'
    for(let char of vowels){
        if(str.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(check1("Hello world"));

//! to check if vowels count exists whole strinh
const check2 = (str)=>{
    let count = 0
    const vowels = 'aeiou'
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log(check2("Hello aeiou world"));

//! pangramChecker if it contains all the letters in the string;

const checkPangram = (str)=>{
    const alph = "abcdefghijklmnopqrstuvwxyz";
    for(char of alph){
        if(!str.includes(char)) return false
    }
    return true;
}

console.log(checkPangram("the quick brown fox jumps over the lazy dog"));
console.log(checkPangram("jendkjanwkj"));

const checkPan = (str)=>{
    let totalAlpha = " ";
    for(let char = 97;char<=122;char++){
        totalAlpha = totalAlpha + String.fromCharCode(char);
    }

    for(let item of totalAlpha){
        if(!str.includes(item)) return false;
    }

    return true;
};

console.log(checkPan("the quick brown fox jumps over the lazy dog"));

//! simplest method to check if string is a pangram or not





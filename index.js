console.log("Hello World") 
console.log(true)
console.log(3)
console.log(typeof(-4))


// non- primitive
// Array =[1,"hshs",true,[jwhhw],[nme: "hsg"]]
// Objects = { nae: gs,age[],class:{sgssuy:"ywywg"}}

// primitive
// strings
// numbers
// boolean= true or false
// null=null
// undefined=undefined

// console.log("3" + 3)
// console.log("3" - 3)
// console.log("3" - "3")

// var man = "work"
// console.log(man)

// var man = 4
// console.man(man)

// let const = "man"
// let else = 3
// let if = null
// let break = "hello"
// let function ="hello"
// let default = "hello"
// let firstname = "Favour"

// console.log(firstname.toLowerCase())

// let class_Name ="P  rospe r"
// console.log(class_Name.toUpperCase())

// // length
// console.log(class_Name.length)

// // indexof
// console.log(class_Name.indexOf("k"));

// let newName ="Nonso"
// // charAt
// console.log(newName.charAt(0))

// let pass ="password"
// console.log(pass.toUpperCase().charAt(0));

// let secondName ="Daniella"
// console.log(secondName.lastIndexOf("l"))

// // charCodeAt
// console.log(secondName.charCodeAt("i"))

// // slice
// let recordName ="Freedom park"
// console.log(recordName.slice(8,12))

// let classWork ="montary"
// console.log.(classWork.slice())

const userinput =("montary");
const inputlength = userinput.length;
const mipoint = (inputlength / 2);
const Half = userinput.slice(mipoint);
console.log(Half)

// ASSIGNMENTS
// read on string allignments

//  Trim is used for the removal of space in a sentences.
let firstName = "Red Grape "
console.log (firstName.trim())

// removal of spaces
 let word = "how are you doing today?"
 let wordBefore = word.length;
 let wordReplace = word.replace(/\s/g, "");
 let wordafter = wordReplace.length;
 console.log(word);
 console.log(wordBefore);
 console.log(wordReplace);
 console.log(wordafter);

 let text ="Hell no"
 console.log(text);
 let textBeforeLength = text.length;
 console.log(textBeforeLength);
 let replacedText = text.replaceAll(" ", "");
 console.log(replacedText);
 let replacedTextLength = replacedText.length;
 console.log(replacedTextLength);

 //replacement of words
 let newName =" no one else knows you"
 console.log(newName);
 let secondName = ("no one else, commend oil");
 console.log(secondName);

 // Arrays method
 let name = ["Man", 23, true, [2, false,]];
 let arry = Array("Nile", 3, true, ["Gold", null]);

//  console.log(name);
//  console.log(arr);
 console.log(name[3][0]);
 console.log(name[3]);
 console.log(name[3][1]);

//  push this is for adding
const newArr = ["finbarr, 34, true"];
const arrResult = newArr.push("Money");
console.log("New length", arrResult);
console.log(newArr);

// opposite of push is poll which remove the last element and retures it.
const arrayPop = [1, 2, 3, 4, 5];
const popArray = arrayPop.pop();
console.log("ArrayPopped", popArray);
console.log(arrayPop);

// const arrayPop = [];
// const popArray = arrayPop.pop();
// console.log("ArrayPopped", popArray);
// // console.log(arrayPop);

// unshift this the opposite of pop and pull for pop and pull is removing and adding from the end while unshift is for the beginning which add from the beginning
let unshiftArr = [1, 3, 5, 7];
let unshiftResult = unshiftArr.unshift(0);
console.log(unshiftResult);
console.log(unshiftArr)

// shift this remove from the beginning this doesnt accept parameter
let shiftArr = [4, 6, 8];
let shiftArrResult = shiftArr.shift();
console.log(shiftArrResult);
console.log(shiftArr);

// reverse 
let names = ["F", "i", "n", "b", "a", "r"];
let reversedArr = names.reverse();
console.log(reversedArr);

// write a js code that reverse string  "Hello" to be "olleh".
// value must be a string
const string = ["Moses"];
reverseString("Moses");

function reverseString(str){
var splitString = str.split("");
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join("")
return joinArray;
}
let String = ["H", "e", "l", "l", "o"];
let reversedString = string.reverse("");
console.log(reversedString);












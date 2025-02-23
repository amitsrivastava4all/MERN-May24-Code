// Async Code (Non Blocking)
// fs - file system
const fs = require('fs'); // core module (Node JS Install)
const path = require('path'); // core module 
// __filename - predefine constant it give the current file path
const fullPath = path.join(__dirname,'one.js');
//__dirname ; //current directory path
fs.readFile(fullPath,function(error, content){
    if(error){
        console.log('Error During File Read', error);
    }
    else{
        console.log('######## ONE JS File Content is ', content.toString());
    }
}); // it open a new thread for this

fs.readFile(__filename,function(error, content){
    if(error){
        console.log('Error During File Read', error);
    }
    else{
        console.log('*************TWO JS File Content is ', content.toString());
    }
}); 

let a = 10;
let b = 20;
let c=  a + b;
console.log('C is ', c);
// this file describes the architecture of node js and how it works .
const fs=require("fs");
//Blocking..
const result= fs.readFileSync("contact.txt","utf-8");
console.log(result);
// it is better to use non-blocking operations , thread pool are also limited by default it is 4 , it can be increased based on the cpu core like utf 8 core if it is then max 8 threads will be there.
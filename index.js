const excelToJson = require('convert-excel-to-json');
const fs =require ('fs')
var jsonDiff = require('json-diff')

const { join } = require('path');
const result1 = excelToJson({
    source: fs.readFileSync('data/1.xlsx') // fs.readFileSync return a Buffer
});
const result2 = excelToJson({
    source: fs.readFileSync('data/2.xlsx') // fs.readFileSync return a Buffer
});

console.log(jsonDiff.diffString(result1,result2))
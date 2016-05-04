//external imports
var Propagator = require("propagator.js")
var assert = require("assert")

//internal imports
var singleDirectionMathsModule = require("./singleDirectionMaths.js")

var mathsModule = {}

function isANumber(value) {
    return typeof value === "number"
}

function coerceToArray(value) {
    if (!(value instanceof Array)) return [value];
    return value.slice();
}


mathsModule.adder = function adder(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells);

    var summands = inputCells
    var sum = outputCell 
    
    function reverseAddition(summandToBackFill) {
        var subtrahends = inputCells.filter((summand) => summand !== summandToBackFill);
        var minuend = [sum]; 
        new singleDirectionMathsModule.Subtracter(minuend.concat(subtrahends),summandToBackFill)
    }
    
    new singleDirectionMathsModule.Adder(inputCells,outputCell);
    summands.forEach(reverseAddition)
}


mathsModule.subtracter = function subtracter(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var minuend = inputCells[0] 
    var subtrahends = inputCells.slice(1)
    var difference = outputCell
     
    function reverseSubtraction(subtrahendToBackFill) {
        var otherSubtrahends = subtrahends.filter((subtrahend) => subtrahend != subtrahendToBackFill)
        new singleDirectionMathsModule.Subtracter([minuend].concat(otherSubtrahends).concat(difference),subtrahendToBackFill)
    }
    
    new singleDirectionMathsModule.Subtracter([minuend].concat(subtrahends),difference)
    new singleDirectionMathsModule.Adder(subtrahends.concat(difference),minuend)
    subtrahends.forEach(reverseSubtraction) 
}

mathsModule.multiplier = function multiplier(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var factors = inputCells
    var product = outputCell
    
   function reverseMultiplication(factorToBackFill) {
        var otherFactors = factors.filter((factor) => factor !== factorToBackFill) 
        new singleDirectionMathsModule.Divider([product].concat(otherFactors),factorToBackFill) 
   } 
    
   new singleDirectionMathsModule.Multiplier(factors,product) 
   factors.forEach(reverseMultiplication)
}

mathsModule.divider = function divider(inputCells,outputCell) {
   inputCells = coerceToArray(inputCells)
   
   var dividend = inputCells[0]
   var divisors = inputCells.slice(1)
   var quotient = outputCell
   
   function reverseDivision(divisorToBackFill) {
        var otherDivisors = divisors.filter((divisor) => divisor != divisorToBackFill)       
        new singleDirectionMathsModule.Divider([dividend].concat(otherDivisors).concat(quotient),divisorToBackFill)
   }
    
   new singleDirectionMathsModule.Divider([dividend].concat(divisors),quotient) 
   new singleDirectionMathsModule.Multiplier([quotient].concat(divisors),dividend) 
   divisors.forEach(reverseDivision)
}

module.exports = mathsModule
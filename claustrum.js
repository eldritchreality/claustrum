//external imports
var Propagator = require("propagator.js")
var assert = require("assert")

//internal imports
var claustrum = {}
claustrum.singleDirection = require("./singleDirectionMaths.js")

function isANumber(value) {
    return typeof value === "number"
}

function coerceToArray(value) {
    if (!(value instanceof Array)) return [value];
    return value.slice();
}


claustrum.adder = function adder(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells);

    var summands = inputCells
    var sum = outputCell 
    
    function reverseAddition(summandToBackFill) {
        var subtrahends = inputCells.filter((summand) => summand !== summandToBackFill);
        var minuend = [sum]; 
        new claustrum.singleDirection.Subtracter(minuend.concat(subtrahends),summandToBackFill)
    }
    
    new claustrum.singleDirection.Adder(inputCells,outputCell);
    summands.forEach(reverseAddition)
}


claustrum.subtracter = function subtracter(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var minuend = inputCells[0] 
    var subtrahends = inputCells.slice(1)
    var difference = outputCell
     
    function reverseSubtraction(subtrahendToBackFill) {
        var otherSubtrahends = subtrahends.filter((subtrahend) => subtrahend != subtrahendToBackFill)
        new claustrum.singleDirection.Subtracter([minuend].concat(otherSubtrahends).concat(difference),subtrahendToBackFill)
    }
    
    new claustrum.singleDirection.Subtracter([minuend].concat(subtrahends),difference)
    new claustrum.singleDirection.Adder(subtrahends.concat(difference),minuend)
    subtrahends.forEach(reverseSubtraction) 
}

claustrum.multiplier = function multiplier(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var factors = inputCells
    var product = outputCell
    
   function reverseMultiplication(factorToBackFill) {
        var otherFactors = factors.filter((factor) => factor !== factorToBackFill) 
        new claustrum.singleDirection.Divider([product].concat(otherFactors),factorToBackFill) 
   } 
    
   new claustrum.singleDirection.Multiplier(factors,product) 
   factors.forEach(reverseMultiplication)
}

claustrum.divider = function divider(inputCells,outputCell) {
   inputCells = coerceToArray(inputCells)
   
   var dividend = inputCells[0]
   var divisors = inputCells.slice(1)
   var quotient = outputCell
   
   function reverseDivision(divisorToBackFill) {
        var otherDivisors = divisors.filter((divisor) => divisor != divisorToBackFill)       
        new claustrum.singleDirection.Divider([dividend].concat(otherDivisors).concat(quotient),divisorToBackFill)
   }
    
   new claustrum.singleDirection.Divider([dividend].concat(divisors),quotient) 
   new claustrum.singleDirection.Multiplier([quotient].concat(divisors),dividend) 
   divisors.forEach(reverseDivision)
}



module.exports = claustrum


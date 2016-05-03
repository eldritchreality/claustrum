var Propagator = require("propagator.js")
var assert = require("assert")


var claustrum = {}

function isANumber(value) {
    return typeof value === "number"
}

function coerceToArray(value) {
    if (!(value instanceof Array)) return [value];
    return value.slice();
}

claustrum.SingleDirectionAdder = function singleDirectionAdder (inputCells,outputCell) {
    
    function add() {
        var values = Array.prototype.slice.call(arguments)
        assert(values.every(isANumber),"Can't add something that isn't a number")

        if(values.length > 1) {
            return values.reduce((memo,next) => memo + next)
        }
        return values[0];
    }
    
    return new Propagator(add,inputCells,outputCell)
}

claustrum.SingleDirectionSubtracter = function singleDirectionSubtracter (inputCells,outputCell) {
    
    function subtract() {
        var values = Array.prototype.slice.call(arguments)
        assert(values.every(isANumber),"Can't add something that isn't a number")

        if(values.length > 1) {
            return values.reduce((memo,next) => memo - next)
        }
        return values[0];
    }
    
    return new Propagator(subtract,inputCells,outputCell)
}

claustrum.SingleDirectionMultiplier = function singleDirectionMultiplier (inputCells,outputCell) {
    
    function product() {
        var values = Array.prototype.slice.call(arguments)
        assert(values.every(isANumber),"Can't add something that isn't a number")

        if(values.length > 1) {
            return values.reduce((memo,next) => memo * next)
        }
        return values[0];
    }
    
    return new Propagator(product,inputCells,outputCell)
}

claustrum.SingleDirectionDivider = function singleDirectionDivider (inputCells,outputCell) {
    
    function divide() {
        var values = Array.prototype.slice.call(arguments)
        assert(values.every(isANumber),"Can't add something that isn't a number")

        if(values.length > 1) {
            return values.reduce((memo,next) => memo / next)
        }
        return values[0];
    }
    
    return new Propagator(divide,inputCells,outputCell)
}

claustrum.adder = function adder(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells);

    var summands = inputCells
    var sum = outputCell 
    
    function reverseAddition(summandToBackFill) {
        var subtrahends = inputCells.filter((summand) => summand !== summandToBackFill);
        var minuend = [sum]; 
        new claustrum.SingleDirectionSubtracter(minuend.concat(subtrahends),summandToBackFill)
    }
    
    new claustrum.SingleDirectionAdder(inputCells,outputCell);
    summands.forEach(reverseAddition)
}


claustrum.subtracter = function subtracter(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var minuend = inputCells[0] 
    var subtrahends = inputCells.slice(1)
    var difference = outputCell
     
    function reverseSubtraction(subtrahendToBackFill) {
        var otherSubtrahends = subtrahends.filter((subtrahend) => subtrahend != subtrahendToBackFill)
        new claustrum.SingleDirectionSubtracter([minuend].concat(otherSubtrahends).concat(difference),subtrahendToBackFill)
    }
    
    new claustrum.SingleDirectionSubtracter([minuend].concat(subtrahends),difference)
    new claustrum.SingleDirectionAdder(subtrahends.concat(difference),minuend)
    subtrahends.forEach(reverseSubtraction) 
}

claustrum.multiplier = function multiplier(inputCells,outputCell) {
    inputCells = coerceToArray(inputCells)
    
    var factors = inputCells
    var product = outputCell
    
   function reverseMultiplication(factorToBackFill) {
        var otherFactors = factors.filter((factor) => factor !== factorToBackFill) 
        new claustrum.SingleDirectionDivider([product].concat(otherFactors),factorToBackFill) 
   } 
    
   new claustrum.SingleDirectionMultiplier(factors,product) 
   factors.forEach(reverseMultiplication)
}

claustrum.divider = function divider(inputCells,outputCell) {
   inputCells = coerceToArray(inputCells)
   
   var dividend = inputCells[0]
   var divisors = inputCells.slice(1)
   var quotient = outputCell
   
   function reverseDivision(divisorToBackFill) {
        var otherDivisors = divisors.filter((divisor) => divisor != divisorToBackFill)       
        new claustrum.SingleDirectionDivider([dividend].concat(otherDivisors).concat(quotient),divisorToBackFill)
   }
    
   new claustrum.SingleDirectionDivider([dividend].concat(divisors),quotient) 
   new claustrum.SingleDirectionMultiplier([quotient].concat(divisors),dividend) 
   divisors.forEach(reverseDivision)
}



module.exports = claustrum


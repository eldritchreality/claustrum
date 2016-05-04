var Propagator = require("propagator.js")
var assert = require("assert")


var singleDirectionMathModule = {}

function isANumber(value) {
    return typeof value === "number"
}

function coerceToArray(value) {
    if (!(value instanceof Array)) return [value];
    return value.slice();
}

singleDirectionMathModule.Adder = function singleDirectionAdder (inputCells,outputCell) {
    
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

singleDirectionMathModule.Subtracter = function singleDirectionSubtracter (inputCells,outputCell) {
    
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

singleDirectionMathModule.Multiplier = function singleDirectionMultiplier (inputCells,outputCell) {
    
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

singleDirectionMathModule.Divider = function singleDirectionDivider (inputCells,outputCell) {
    
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

module.exports = singleDirectionMathModule
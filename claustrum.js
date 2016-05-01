var Propagator = require("propagator.js")
var assert = require("assert")


var claustrum = {}

function isANumber(value) {
    return typeof value === "number"
}



claustrum.Adder = function Adder (inputCells,outputCell) {
    
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

claustrum.Subtracter = function Subtracter (inputCells,outputCell) {
    
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

claustrum.Multiplier = function Multiplier (inputCells,outputCell) {
    
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

claustrum.Divider = function Divider (inputCells,outputCell) {
    
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

module.exports = claustrum


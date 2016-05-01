var Propagator = require("propagator.js")
var claustrum = require("./claustrum.js")


var input1 = Propagator.makeCell().update(1)
var input2 = Propagator.makeCell().update(10)
var input3 = Propagator.makeCell().update(100)
var output = Propagator.makeCell()
var inputs = [input1,input2,input3]
Propagator.addProbe("output",output)
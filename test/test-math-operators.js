var expect = require("chai").expect;
var Propagator = require("propagator.js")
var claustrum = require("../claustrum.js")

describe("The Maths Operators",function(){
    
    describe("The Adder",function(){
        
        it("should take multiple cells and pass the results of adding them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.Adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(111);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.Adder(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.Adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
    describe("The Subtracter",function(){
        
        it("should take multiple cells and pass the results of subtracting them from the initial cell to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.Subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(89);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.Subtracter(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.Subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    }) 
    
    describe("The Multiplier",function(){
        
         it("should take multiple cells and pass the results of multiplying them to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.Multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(1000000);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.Multiplier(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.Multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        }) 
    })
    
    describe("The Divider",function() {
        
         it("should take multiple cells and pass the results of sucessively dividing them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell().update(5)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.Divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(100);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.Divider(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.Divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
})
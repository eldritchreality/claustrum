var expect = require("chai").expect;
var Propagator = require("propagator.js")
var claustrum = require("../claustrum.js")

describe("Maths Operators:",function(){
    
    describe("The Single Direction Adder",function(){
        
        it("should take multiple cells and pass the results of adding them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.singleDirection.Adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(111);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.singleDirection.Adder(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.singleDirection.Adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
    describe("The Reversible Adder",function(){
       
         it("should take multiple cells and pass the results of adding them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell()
            
            claustrum.maths.adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(111);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.maths.adder(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.maths.adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
      
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell().update(111)
            
            claustrum.maths.adder([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(1);
        })
       
   })
    
    describe("The Single Direction Subtracter",function(){
        
        it("should take multiple cells and pass the results of subtracting them from the initial cell to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.singleDirection.Subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(89);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.singleDirection.Subtracter(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.singleDirection.Subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    }) 
    
    describe("The Reversible Subtracter",function(){
       
        it("should take multiple cells and pass the results of subtracting them from the initial cell to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.maths.subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(89);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.maths.subtracter(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.maths.subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell().update(89)
            
            claustrum.maths.subtracter([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(100);
        })
       
   })
    
    describe("The Single Direction Multiplier",function(){
        
         it("should take multiple cells and pass the results of multiplying them to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.singleDirection.Multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(1000000);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.singleDirection.Multiplier(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.singleDirection.Multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        }) 
    })
    
    describe("The Reversible Multiplier",function(){
        
         it("should take multiple cells and pass the results of multiplying them to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell()
            
            claustrum.maths.multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(1000000);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.maths.multiplier(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.maths.multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })         
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell().update(1000000)
            
            claustrum.maths.multiplier([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(100);
        })
    })
    
    
    describe("The Single Direction Divider",function() {
        
         it("should take multiple cells and pass the results of sucessively dividing them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell().update(5)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.singleDirection.Divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(100);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.singleDirection.Divider(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.singleDirection.Divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
    describe("The Reversible Divider",function() {
        
         it("should take multiple cells and pass the results of sucessively dividing them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell().update(5)
            var output = Propagator.makeCell()
            
            claustrum.maths.divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(100);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.maths.divider(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.maths.divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell().update(100)
            
            claustrum.maths.divider([input1,input2,input3],output);
            
            expect(input3.getContents()).to.equal(5);
        })
    })
    
})
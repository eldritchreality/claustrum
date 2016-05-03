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
            
            var theAdder = new claustrum.SingleDirectionAdder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(111);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.SingleDirectionAdder(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theAdder = new claustrum.SingleDirectionAdder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
    describe("The Multi Direction Adder",function(){
       
         it("should take multiple cells and pass the results of adding them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell()
            
            claustrum.adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(111);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.adder(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.adder([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
      
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(100)
            var output = Propagator.makeCell().update(111)
            
            claustrum.adder([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(1);
        })
       
   })
    
    describe("The Single Direction Subtracter",function(){
        
        it("should take multiple cells and pass the results of subtracting them from the initial cell to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.SingleDirectionSubtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(89);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.SingleDirectionSubtracter(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theSubtracter = new claustrum.SingleDirectionSubtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    }) 
    
    describe("The Multi Direction Subtracter",function(){
       
        it("should take multiple cells and pass the results of subtracting them from the initial cell to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(89);
            
        })
        
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.subtracter(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.subtracter([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell().update(89)
            
            claustrum.subtracter([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(100);
        })
       
   })
    
    describe("The Single Direction Multiplier",function(){
        
         it("should take multiple cells and pass the results of multiplying them to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.SingleDirectionMultiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(1000000);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.SingleDirectionMultiplier(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theMultiplier = new claustrum.SingleDirectionMultiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        }) 
    })
    
    describe("The Multi Direction Multiplier",function(){
        
         it("should take multiple cells and pass the results of multiplying them to an output cell",function(){
            var input1 = Propagator.makeCell().update(100)
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell()
            
            claustrum.multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(1000000);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.multiplier(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.multiplier([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })         
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell().update(10)
            var input3 = Propagator.makeCell().update(1000)
            var output = Propagator.makeCell().update(1000000)
            
            claustrum.multiplier([input1,input2,input3],output);
            
            expect(input1.getContents()).to.equal(100);
        })
    })
    
    
    describe("The Single Direction Divider",function() {
        
         it("should take multiple cells and pass the results of sucessively dividing them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell().update(5)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.SingleDirectionDivider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(100);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.SingleDirectionDivider(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            var theDivider = new claustrum.SingleDirectionDivider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
    })
    
    describe("The Multi Direction Divider",function() {
        
         it("should take multiple cells and pass the results of sucessively dividing them to an output cell",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell().update(5)
            var output = Propagator.makeCell()
            
            claustrum.divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(100);
            
        })
         
        it("should cope fine with only one defined input",function(){
            var input1 = Propagator.makeCell().update(1)
            var output = Propagator.makeCell()
            
            claustrum.divider(input1,output);
            
            expect(output.getContents()).to.equal(1);
        })
        
        it("should cope fine with no defined inputs when initialised",function(){
            var input1 = Propagator.makeCell()
            var input2 = Propagator.makeCell()
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell()
            
            claustrum.divider([input1,input2,input3],output);
            
            expect(output.getContents()).to.equal(undefined);
        })
        
        it("should be able to set a single missing input when it has all other inputs and the output",function(){
            var input1 = Propagator.makeCell().update(1000)
            var input2 = Propagator.makeCell().update(2)
            var input3 = Propagator.makeCell()
            var output = Propagator.makeCell().update(100)
            
            claustrum.divider([input1,input2,input3],output);
            
            expect(input3.getContents()).to.equal(5);
        })
    })
    
})
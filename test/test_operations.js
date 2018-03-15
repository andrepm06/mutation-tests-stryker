'use strict';

const assert = require("assert");
const Operations = require('../src/operations');

describe("Arithmetic Operations -", function(){

    it("First number bigger than second number", function(){
        let result = Operations.subtraction(1, -1);
        assert.equal("2", result);
    });

    it("First number negative and smaller than second number", function(){
        let result = Operations.subtraction(-1, 1);
        assert.equal("0", result);
    }); 

    it("First number bigger than second number", function() {
        let result = Operations.addition(3, 2);
        assert.equal("5", result);
    })

    it("First number smaller than second number", function() {
        let result = Operations.addition(2, 3);
        assert.equal("5", result);
    })

    it("First number equal to second number", function(){
        let result = Operations.addition(1, 1);
        assert.equal("2", result);
    });

});
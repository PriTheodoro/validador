const assert = require("chai").assert;
// const expect = chai.expect;
const cpfValidator = require("../index");

describe("cpfValidator()", () => {
    it("retorna true para um CPF valido", () => {
      assert.equal(cpfValidator("29581321888"), true);  
    });
    it("retorna false para um número que não é CPF", () => {
        assert.equal(cpfValidator("0000000000/00"), false);  
    }); 
    it("retorna false para um número que não é CPF", () => {
        assert.equal(cpfValidator("111.111.111-11"), false);  
    });
    it("retorna true para um CPF valido", () => {
        assert.equal(cpfValidator("213.641.008-35"), true);  
    });  
    
});
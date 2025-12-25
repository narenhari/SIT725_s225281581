const expect = require("chai").expect;
const request = require("request");

describe("Add Two Numbers API", function () {
    const baseUrl = "http://localhost:3000/add";

    //Valid Calculation
    it("should return the correct sum for valid numbers", function (done) {
        request.get(`${baseUrl}?num1=20&num2=30`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(data.result).to.equal(50);
            done();
        });
    });

    //Non numeric calculation
    it("should handle non numeric strings by returning nan", function (done) {
        request.get(`${baseUrl}?num1=abc&num2=5`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(data.result).to.be.null; 
            done();
        });
    });

    //Negative number calculation
    it("should correctly add two negative numbers", function (done) {
        request.get(`${baseUrl}?num1=-10&num2=-5`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(data.result).to.equal(-15);
            done();
        });
    });

    //Decimal Number calculation
    it("should correctly add two decimal numbers", function (done) {
        request.get(`${baseUrl}?num1=1.5&num2=2.5`, function (error, response, body) {
            const data = JSON.parse(body);
            expect(data.result).to.equal(4);
            done();
        });
    });
});
var assert = require('chai').assert;
var quantityMeasurement = require('../Main/QuantityMeasurement');
var Unit = require('../Main/UnitType');

describe('Legth test cases', function () {

    it('should return equal 4 when addition of 2 inch and 2 inch', function () {
        let length1 = new quantityMeasurement(Unit.INCH, 2);
        let length2 = new quantityMeasurement(Unit.INCH, 2);
        let ans = length1.addition(length2);
        assert.equal(ans, 4);
    });

    it('should return equal 14 when addition of 1 feet and 2 inch', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 1);
        let length2 = new quantityMeasurement(Unit.INCH, 2);
        let ans = length1.addition(length2);
        assert.equal(ans, 14);
    });

    it('should return equal 24 when addition of 1 feet and 1 feet', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 1);
        let length2 = new quantityMeasurement(Unit.INCH, 12);
        let ans = length1.addition(length2);
        assert.equal(24,ans);
    });

    it('should return equal 3 Inch when addition of 2 inch and 2.5 Centimeter', function () {
        let length1 = new quantityMeasurement(Unit.INCH, 2);
        let length2 = new quantityMeasurement(Unit.CM, 2.5);
        let ans = length1.addition(length2);
        assert.equal(3,ans);
    });
    
    

});
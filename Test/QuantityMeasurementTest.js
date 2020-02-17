
var assert = require('chai').assert;
var quantityMeasurement = require('../Main/QuantityMeasurement');
var Unit = require('../Main/UnitType');

describe('Legth test cases', function () {

    it('should return equal when 1 feet and 1 feet.', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 1);
        let length2 = new quantityMeasurement(Unit.FEET, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 1 inch and 1 inch.', function () {
        let length1 = new quantityMeasurement(Unit.INCH, 1);
        let length2 = new quantityMeasurement(Unit.INCH, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 1 feet and 12 inch.', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 1);
        let length2 = new quantityMeasurement(Unit.INCH, 12);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return not equal when 1 feet and 0 feet.', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 1);
        let length2 = new quantityMeasurement(Unit.FEET, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, false);
    });
    it('should return not equal when 1 inch and 0 inch.', function () {
        let length1 = new quantityMeasurement(Unit.INCH, 1);
        let length2 = new quantityMeasurement(Unit.INCH, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, false);
    });

    it('should return equal when 0 feet and 0 feet.', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 0);
        let length2 = new quantityMeasurement(Unit.FEET, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('check for null.', function () {
        let length = new quantityMeasurement(Unit.FEET, 0);
        assert.isNotNull(length);
    });

    it('checking reference.', function () {
        let length = new quantityMeasurement(Unit.FEET, 1);
        assert.isDefined(length);
    });

    it('check for null.', function () {
        let length = new quantityMeasurement(Unit.INCH, 0);
        assert.isNotNull(length);
    });

    it('checking reference.', function () {
        let length = new quantityMeasurement(Unit.INCH, 1);
        assert.isDefined(length);
    });

    it('should return equal when 0 feet and 0 inch.', function () {
        let length1 = new quantityMeasurement(Unit.FEET, 0);
        let length2 = new quantityMeasurement(Unit.INCH, 0);
        let ans = length1.compare(length2);
        assert.equal(ans,true);
    });
})
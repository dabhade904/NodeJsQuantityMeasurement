
var assert = require('chai').assert;
var quantityMeasurement = require('../Main/QuantityMeasurement');
var Unit = require('../Main/UnitType');

describe('Legth test cases', function () {

    it('should return equal when 1 feet and 1 feet.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.FEET, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 1 inch and 1 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 1 feet and 12 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 12);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return not equal when 1 feet and 0 feet.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.FEET, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, false);
    });
    it('should return not equal when 1 inch and 0 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, false);
    });

    it('should return equal when 0 feet and 0 feet.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 0);
        let length2 = new quantityMeasurement(Unit.length.FEET, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('check for null.', function () {
        let length = new quantityMeasurement(Unit.length.FEET, 0);
        assert.isNotNull(length);
    });

    it('checking reference.', function () {
        let length = new quantityMeasurement(Unit.length.FEET, 1);
        assert.isDefined(length);
    });

    it('check for null.', function () {
        let length = new quantityMeasurement(Unit.length.INCH, 0);
        assert.isNotNull(length);
    });

    it('checking reference.', function () {
        let length = new quantityMeasurement(Unit.length.INCH, 1);
        assert.isDefined(length);
    });

    it('should return equal when 0 feet and 0 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 0);
        let length2 = new quantityMeasurement(Unit.length.INCH, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 0 feet and 0 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 0);
        let length2 = new quantityMeasurement(Unit.length.INCH, 0);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return notEqual when 1 feet and 1 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 1);
        let ans = length1.compare(length2);
        assert.notEqual(ans, true);
    });

    it('should return notEqual when 1 feet and 1 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 1);
        let length2 = new quantityMeasurement(Unit.length.FEET, 1);
        let ans = length1.compare(length2);
        assert.notEqual(ans, true);
    });

    it('should return equal when 12 inch and 1 feet.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 12);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 3 feet and 1 yard.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 3);
        let length2 = new quantityMeasurement(Unit.length.YARD, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return notEqual when 1 feet and 1 yard.', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.YARD, 1);
        let ans = length1.compare(length2);
        assert.notEqual(ans, true);
    });

    it('should return notEqual when 1 inch and 1 yard.', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 1);
        let length2 = new quantityMeasurement(Unit.length.YARD, 1);
        let ans = length1.compare(length2);
        assert.notEqual(ans, true);
    });

    it('should return equal when 1 yard and 36 inch.', function () {
        let length1 = new quantityMeasurement(Unit.length.YARD, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 36);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 36 inch and 1 yard.', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 36);
        let length2 = new quantityMeasurement(Unit.length.YARD, 1);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 1 yard and 3 feet', function () {
        let length1 = new quantityMeasurement(Unit.length.YARD, 1);
        let length2 = new quantityMeasurement(Unit.length.FEET, 3);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });

    it('should return equal when 2 inch and 5 Centimeter', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 2);
        let length2 = new quantityMeasurement(Unit.length.CM, 5);
        let ans = length1.compare(length2);
        assert.equal(ans, true);
    });
});
describe('Volume convert test cases', function () {
    it('should return equal when of 1 ml and 1 ml.', function () {
        let volume1 = new quantityMeasurement(Unit.volume.ML, 1);
        let volume2 = new quantityMeasurement(Unit.volume.ML, 1);
        let ans = volume1.compare(volume2);
        assert.equal(ans, true);
    });

    it('should return equal when of 1 litr and 1000 ml.', function () {
        let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
        let volume2 = new quantityMeasurement(Unit.volume.ML, 1000);
        let ans = volume1.compare(volume2);
        assert.equal(ans,true);
    });
});

describe('Weight convert test cases', function () {
    it('should return equal when of 1 kg and 1000 gm.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
        let weight2 = new quantityMeasurement(Unit.weight.GM, 1000);
        let ans = weight1.compare(weight2);
        assert.equal(ans, true);
    });

    it('should return equal when of 1 tonne and 1000 kgs.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let weight2 = new quantityMeasurement(Unit.weight.KG, 1000);
        let ans = weight1.compare(weight2);
        assert.equal(ans,true);
    });

    
    it('should return equal when of 1 gm and 1 gm.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
        let weight2 = new quantityMeasurement(Unit.weight.GM, 1);
        let ans = weight1.compare(weight2);
        assert.equal(ans, true);
    });
    it('should return equal when of 1 kg and 1 kg.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
        let weight2 = new quantityMeasurement(Unit.weight.KG, 1);
        let ans = weight1.compare(weight2);
        assert.equal(ans, true);
    });
    it('should return equal when of 1 tonne and 1 tonne.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let weight2 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let ans = weight1.compare(weight2);
        assert.equal(ans, true);
    });
    it('should return not equal when of 1 gm and 0 gm.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
        let weight2 = new quantityMeasurement(Unit.weight.GM, 0);
        let ans = weight1.compare(weight2);
        assert.equal(ans, false);
    });
    it('should return not equal when of 1 kg and 0 kg.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.KG, 1);
        let weight2 = new quantityMeasurement(Unit.weight.KG, 0);
        let ans = weight1.compare(weight2);
        assert.equal(ans, false);
    });

    it('should return not equal when of 1 tonne and 0 tonne.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let weight2 = new quantityMeasurement(Unit.weight.TONNE, 0);
        let ans = weight1.compare(weight2);
        assert.equal(ans, false);
    });
    it('should return not equal when of 1 gm and 1 tonne.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.GM, 1);
        let weight2 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let ans = weight1.compare(weight2);
        assert.equal(ans, false);
    });
});
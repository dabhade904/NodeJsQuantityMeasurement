var assert = require('chai').assert;
var quantityMeasurement = require('../Main/QuantityMeasurement');
var Unit = require('../Main/UnitType');

describe('Legth test cases', function () {

    it('should return equal 4 when addition of 2 inch and 2 inch', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 2);
        let length2 = new quantityMeasurement(Unit.length.INCH, 2);
        let ans = length1.addition(length2);
        assert.equal(ans, 4);
    });

    it('should return equal 14 when addition of 1 feet and 2 inch', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 2);
        let ans = length1.addition(length2);
        assert.equal(14, ans);
    });

    it('should return equal 24 when addition of 1 feet and 1 feet', function () {
        let length1 = new quantityMeasurement(Unit.length.FEET, 1);
        let length2 = new quantityMeasurement(Unit.length.INCH, 12);
        let ans = length1.addition(length2);
        assert.equal(24, ans);
    });

    it('should return equal 3 Inch when addition of 2 inch and 2.5 Centimeter', function () {
        let length1 = new quantityMeasurement(Unit.length.INCH, 2);
        let length2 = new quantityMeasurement(Unit.length.CM, 2.5);
        let ans = length1.addition(length2);
        assert.equal(3, ans);
    });
});


describe('Volumes test cases', function () {

    it('should return equal 7.57 when addition of gallon and 2 inch', function () {
        let length1 = new quantityMeasurement(Unit.volume.GALLON, 1);
        let length2 = new quantityMeasurement(Unit.volume.LIT, 3.78);
        let ans = length1.addition(length2);
        assert.equal(7565.41, ans);
    });

    it('should return equal 2 litre when addition of 1 litre and 1000 ml', function () {
        let length1 = new quantityMeasurement(Unit.volume.LIT, 1);
        let length2 = new quantityMeasurement(Unit.volume.ML, 1000);
        let ans = length1.addition(length2);
        assert.equal(ans, 2000);
    });

    it('should return 2 when addition of 1 ml and 1 ml.', function () {
        let volume1 = new quantityMeasurement(Unit.volume.ML, 1);
        let volume2 = new quantityMeasurement(Unit.volume.ML, 1);
        let ans = volume1.addition(volume2);
        assert.equal(ans, 2);
    });

    it('should return 2 when addition of 1 litr and 1 litr.', function () {
        let volume1 = new quantityMeasurement(Unit.volume.LIT, 1);
        let volume2 = new quantityMeasurement(Unit.volume.LIT, 1);
        let ans = volume1.addition(volume2);
        assert.equal(ans, 2);
    });

    it('should return 2 when addition of 1 gallon and 1 gallon.', function () {
        let volume1 = new quantityMeasurement(Unit.volume.GALLON, 1);
        let volume2 = new quantityMeasurement(Unit.volume.GALLON, 1);
        let ans = volume1.addition(volume2);
        assert.equal(ans, 2);
    });
})

describe('Weight  test cases', function () {
    it('should return addition when of 1 tonne and 1001000 grams.', function () {
        let weight1 = new quantityMeasurement(Unit.weight.TONNE, 1);
        let weight2 = new quantityMeasurement(Unit.weight.GM, 1000);
        let ans = weight1.addition(weight2);
        assert.equal(1001000, ans);
    });

})
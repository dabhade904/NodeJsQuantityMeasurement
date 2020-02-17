
  var assert = require('assert');
  var quantityMeasurement = require('../Main/QuantityMeasurement');
  var Unit = require('../Main/UnitType');

  describe('Legth test cases', function () {
    it('should return equal when 1 feet and 1 feet.', function () {
      let length1 = new quantityMeasurement(Unit.FEET, 1);
      let length2 = new quantityMeasurement(Unit.FEET, 1);
      let ans = length1.compare(length2);
      assert.equal(ans, true);
    });
  })
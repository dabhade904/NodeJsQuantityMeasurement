var unit = require('../Main/UnitType');

class Measurement {

	constructor(unit, value) {
		this.value = value;
		this.unit = unit;
	}

	compare(that) {
		if (this.unit == that.unit) {
			return this.value == that.value;
		} else if (this.unit != that.unit) {
			return this.unit * this.value == that.unit * that.value;
		} else {
			return false;
		}
	}
    addition(that) {
		if (this.unit == that.unit) {
			return this.value + that.value;
		} else if (this.unit != that.unit) {
			return this.unit * this.value + that.unit * that.value;
		} else {
			return 0;
		}
    }
    
    compareTemprature(temp) {
		if (this.unit == temp.unit) {
			return this.value == temp.value;
		} else if (temp.unit == 'fahrenheit') {
			return (this.value == (temp.value - 32) * 5 / 9);
		} else if (temp.unit == 'celsius') {
			return (this.value == (temp.value * 9 / 5) + 32);
		} else {
			return false;
		}
	}
}
module.exports = Measurement;


var unit = require('../Main/UnitType');

class Measurement {
	constructor(unit, value) {
	    this.value = value; //for inch
	    this.unit = unit;   //for feet 
     
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
}
module.exports =Measurement;



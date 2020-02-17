
var unit = require('../Main/UnitType');

class Measurement {

    constructor(unit, value) {
        this.value = value; //for inch
        this.unit = unit;   //for feet 

    }

    compare(units) {
        if (this.unit == units.unit) {
            return this.value == units.value;
        } else if (this.unit != units.unit) {
            return this.unit * this.value == units.unit * units.value;
        } else {
            return false;
        }
    }

    addition(unitValue) {
		if (this.unit == unitValue.unit) {
			return this.value + unitValue.value;
		} else if (this.unit != unitValue.unit) {
			return this.unit * this.value + unitValue.unit * unitValue.value;
		} else {
			return 0;
		}
	}
}
module.exports = Measurement;



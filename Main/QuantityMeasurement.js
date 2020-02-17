
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
}
module.exports = Measurement;



/**
 * Created by marie on 17/03/2017.
 */

const {Spiderman} = require('./spiderman');
const {Deadpool} = require('./deadpool');
const {Pony} = require('./poney');

let instanceS = null;
let instanceP = null;
let instanceD = null;

class Unicorn {
  constructor() {
    this.energy = 10;
    this.nbUnicorn = 0;
    if (instanceS && instanceP && instanceD) {
      instanceD = new Deadpool();
      instanceS = new Spiderman();
      instanceP = new Pony();
    }
  }

  lostEnergy(instanceP) {
    this.energy = 0;
    this.nbUnicorn = this.nbUnicorn - 1;
    instanceP.untransform();
  }

  transformation() {
    this.nbUnicorn = this.nbUnicorn + 1;
  }

}
module.exports = {Unicorn};

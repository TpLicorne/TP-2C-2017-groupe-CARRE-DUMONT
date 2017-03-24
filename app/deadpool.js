const {Pony} = require('./poney');
const {Unicorn} = require('./licorne');
const {Spiderman} = require('./spiderman');

let instance1 = null;
let instance2 = null;
let instance3 = null;

class Deadpool {
  constructor() {
    this.life = 100;
    this.nb = 0;
    if (instance1 && instance2 && instance3) {
      instance1 = new Unicorn();
      instance2 = new Pony();
      instance3 = new Spiderman();
    }
  }

  winLife(instance1, instance2) {
    if (instance1.nbUnicorn) {
      if (this.life < 50 && instance1.nbUnicorn !== 1) {
        instance1.lostEnergy(instance2);
        instance1.lostEnergy(instance2);
        this.life = 100;
        console.log('Il reste ', this.life, ' pv a Deadpool');
      } else if (this.life < 50 && instance1.nbUnicorn === 1) {
        instance1.lostEnergy(instance2);
        this.life = this.life + 50;
        console.log('Il reste ', this.life, ' pv a Deadpool');
      } else if (this.life < 100 && this.life >= 50) {
        instance1.lostEnergy(instance2);
        this.life = 100;
        console.log('Il reste ', this.life, ' pv a Deadpool');
      } else {
        console.log('Il reste ', this.life, ' pv a Deadpool');
      }
    } else {
      console.log('Il n\'y a pas assez de licorne.');
      console.log('Il reste ', this.life, ' pv a Deadpool');
    }
  }

  lostLife() {
    if (this.life) {
      const r = (Math.floor(Math.random() * this.life));
      this.life = r;
      console.log('Il reste ', this.life, ' pv a Deadpool');

      const e = (Math.floor(Math.random() * 10));
      console.log('Deadpool a combattu ', e, ' ennemis. ');
    } else {
      console.log('Deadpool n\'a plus de vie.');
    }
  }
  transform(instance2, instance1, instance3) {
    let i;
    let j = 0;
    this.nb = instance2.nbPony;

    console.log(' ');

    if (instance3.d === 1) {
      console.log('Le poney de Spiderman est trop fatique.');
      j = 1;
    }

    for (i = j; i < this.nb; i++) {
      const v = (Math.floor(Math.random() * 2));

      if (instance2.energy === 10 && v === 1) {
        instance2.transform(instance1);
        console.log('Tu peux te transformer en licorne');
      } else {
        console.log('Tu ne peux pas te transformer en licorne');
      }
    }

    console.log(' ');
    console.log('Le nombre de Poney :', instance2.nbPony);
    console.log('Le nombre de Licorne : ', instance1.nbUnicorn);
  }
}
module.exports = {Deadpool};

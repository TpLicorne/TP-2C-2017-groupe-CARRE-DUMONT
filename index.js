const EventEmitter = require('events').EventEmitter;
const {Spiderman} = require('./app/spiderman');
const {Deadpool} = require('./app/deadpool');
const {Pony} = require('./app/poney');
const {Unicorn} = require('./app/licorne');


let i;
const s = new Spiderman();
const d = new Deadpool();
const p = new Pony();
const u = new Unicorn();

for (i = 0; i <= 5; i++) {
  const day = new EventEmitter();
  day.on('day', () => console.log('jour'));
  day.on('night', () => console.log('nuit'));
  day.emit('day');
  console.log('');
  d.winLife(u, p);
  s.do(u, p);
  d.transform(p, u, s);
  console.log('');
  day.emit('night');
  console.log('');
  d.lostLife();
  p.winEnergy();
  console.log('');
}


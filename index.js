/** Systeme de 5 journee**/

const {Spiderman} = require('./app/spiderman');
const {Deadpool} = require('./app/deadpool');
const {Pony} = require('./app/poney');
const {Unicorn} = require('./app/licorne');


var EventEmitter = require('events').EventEmitter;
var i;


const s = new Spiderman;
const d = new Deadpool;
const p = new Pony;
const u = new Unicorn;


for (i=0;i<=5;i++) {

    var day = new EventEmitter();
    day.on('day', () => console.log('jour'));
    day.on('night', () => console.log('nuit'));


    day.emit('day');
    console.log ("");

    d.WinLife(u,p);
    s.do(u,p);
    d.transform(p,u);

    console.log ("");

    day.emit('night');

    console.log ("");
    d.LostLife();
    p.WinEnergy();
    console.log ("");
}



/** Systeme de 5 journee**/

const {Spiderman} = require('./spiderman');
const {Deadpool} = require('./deadpool');
const {Pony} = require('./poney');


var EventEmitter = require('events').EventEmitter;
var i;
const s = new Spiderman;
const d = new Deadpool;
const p = new Pony;


for (i=0;i<=5;i++) {

    var day = new EventEmitter();
    day.on('day', () => console.log('jour'));
    day.on('night', () => console.log('nuit'));


    day.emit('day');
    console.log ("");
    s.faire();
    d.transform(p);
    console.log ("");

    day.emit('night');
    console.log ("");
    d.LostLife();
    p.WinEnergy();
    console.log ("");
}



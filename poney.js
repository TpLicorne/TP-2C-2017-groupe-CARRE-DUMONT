/**
 * Created by marie on 17/03/2017.
 */

const {Spiderman} = require('./spiderman');
const {Deadpool} = require('./deadpool');
const {Unicorn} = require('./licorne');


let instanceS = null;
let instanceD = null;
let instanceU = null;

class Pony {

    constructor(){

        this.energy = 0;
        this.nb = 10;

        if (instanceD && instanceS && instanceU)
        {
            instanceU = new Unicorn();
            instanceS = new Spiderman();
            instanceD = new Deadpool();
        }

    }
    destructor()
    {

    }

    WinEnergy()
    {
        this.energy=10;
    }
    Transform()
    {

            const lin = new Unicorn();
            lin.LostEnergy;
            this.destructor;

    }
}


module.exports = {Pony};
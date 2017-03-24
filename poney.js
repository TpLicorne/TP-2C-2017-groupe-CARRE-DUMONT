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
        this.nbPony = 10;

        if (instanceD && instanceS && instanceU)
        {
            instanceU = new Unicorn();
            instanceS = new Spiderman();
            instanceD = new Deadpool();
        }
    }

    WinEnergy()
    {
        this.energy=10;
    }

    Transform(instanceU)
    {
         this.nbPony = this.nbPony -1;
         instanceU.transformation();
    }
    untransform()
    {
        this.nbPony = this.nbPony +1;
    }
}


module.exports = {Pony};
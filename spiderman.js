/**
 * Created by marie on 17/03/2017.
 */

const {Pony} = require('./poney');
const {Unicorn} = require('./licorne');

let instanceP= null;
let instanceU=null;

class Spiderman
{
    constructor()
    {
        if (instanceP && instanceU)
        {
            instanceU = new Unicorn();
            instanceP = new Pony;
        }
    }

    faire()
    {
        const r= (Math.floor(Math.random() * 2));
        if (r==1) {
            console.log('Je fais du poney');
        } else {

            console.log('Je fais de la licorne');
        }
    }
}


module.exports = {Spiderman};
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

    do(instanceU,instanceP)
    {
        if ( instanceP.nbPony != 0 && instanceU.nbUnicorn != 0 )
        {
            const r= (Math.floor(Math.random() * 2));
            if (r==1) {
                console.log('Spiderman fait du poney');
                instanceP.energy=0;

            } else {
                console.log('Spiderman fait de la licorne');
                instanceU.LostEnergy(instanceP);
            }
        }
        else if ( instanceP.nbPony == 0 )
        {
            console.log('Spiderman fait de la licorne');
            instanceU.LostEnergy(instanceP);
        }
        else
        {
            console.log('Spiderman fait du poney');

        }

    }
}


module.exports = {Spiderman};
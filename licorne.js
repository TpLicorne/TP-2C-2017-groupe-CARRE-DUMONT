/**
 * Created by marie on 17/03/2017.
 */

const {Spiderman} = require('./spiderman');
const {Deadpool} = require('./deadpool');
const {Pony} = require('./poney');


let instance = null;


class Unicorn
{
    constructor()
    {
        this.energy = 10;
        if(instance)
        {
            instance = new Deadpool();
        }

    }
    destructor () {

    }

    LostEnergy(){

        console.log("good");
        console.log(this.energy)
    }
    Transformation()
    {
        console.log('Je suis une licorne');
    }
}
module.exports = {Unicorn};

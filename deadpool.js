const {Pony} = require('./poney');
const {Unicorn} = require('./licorne');


let instance1 = null;
let instance2=null;

class Deadpool
{
    constructor()
    {
        this.life = 100;
        if(instance1 && instance2)
        {
            instance1 = new Unicorn();
            instance2 = new Pony();
        }
    }

    WinLife(instance1)
    {
       if (this.life  < 50)
       {
           instance1.Transformation();
           this.life = 100;
           console.log( "Il reste ",this.life, " pv a Deadpool" );
       }
       else if (this.life < 100 && this.life >= 50)
       {
           instance1.Transformation();
           this.life = 100;
           console.log( "Il reste ",this.life, " pv a Deadpool" );
       }
       else
       {
           console.log( "Il reste ",this.life, " pv a Deadpool" );
       }
    }

    LostLife ()
    {
        {
            const r= (Math.floor(Math.random() * 100));
            this.life = r ;
            console.log( "Il reste ",this.life, " pv a Deadpool" );
        }
    }
    transform (instance2)
    {

        const v= (Math.floor(Math.random() * 2));

        if (instance2.energy == 10 && v==1)
        {
            instance2.Transform();
            console.log("Je le veux");
        }
        else
        {
            console.log("Ce n'est pas possible");
        }
    }
}
module.exports = {Deadpool};
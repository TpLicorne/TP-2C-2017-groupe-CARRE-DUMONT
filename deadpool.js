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

    WinLife(instance1, instance2)
    {
        if(instance1.nbUnicorn !=0)
        {
            if (this.life  < 50 && instance1.nbUnicorn != 1)
            {
                instance1.LostEnergy(instance2);
                instance1.LostEnergy(instance2);
                this.life = 100;
                console.log( "Il reste ",this.life, " pv a Deadpool" );
            }
            else if (this.life  < 50 && instance1.nbUnicorn ==1)
            {
                instance1.LostEnergy(instance2);
                this.life = this.life + 50;
                console.log( "Il reste ",this.life, " pv a Deadpool" );
            }
            else if (this.life < 100 && this.life >= 50)
            {
                instance1.LostEnergy(instance2);
                this.life = 100;
                console.log( "Il reste ",this.life, " pv a Deadpool" );
            }
            else
            {
                console.log( "Il reste ",this.life, " pv a Deadpool" );
            }
        }
        else
        {
            console.log( "Il n'y a pas assez de licorne. Il reste ",this.life, " pv a Deadpool" );
        }

    }

    LostLife ()
    {
        if (this.life !=0)
        {
            const r= (Math.floor(Math.random() * this.life));
            this.life = r ;
            console.log( "Il reste ",this.life, " pv a Deadpool" );

            const e= (Math.floor(Math.random() * 10));
            console.log( "Deadpool a combattu ",e, " ennemis. " );
        }
        else
        {
            console.log("Deadpool n'a plus de vie.");
        }
    }
    transform (instance2, instance1)
    {
        var i;

        for (i=0;i<instance2.nbPony; i++)
        {
            const v= (Math.floor(Math.random() * 2));

            if (instance2.energy == 10 && v==1)
            {
                instance2.Transform(instance1);
                console.log("Tu peux te transformer en licorne");
            }
            else
            {
                console.log("Tu ne peux pas te transformer en licorne");
            }
        }
        console.log ("Le nombre de Poney :", instance2.nbPony);
        console.log ("Le nombre de Licorne : ", instance1.nbUnicorn);


    }
}
module.exports = {Deadpool};
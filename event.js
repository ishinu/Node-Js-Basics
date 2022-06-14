const EventEmitter = require('events');
const ev= new EventEmitter();

ev.on('tutorial',(num1,num2)=>{
    console.log('Event occurred');
    console.log('Sum of 1 +1 is '+ (num1+num2));
});

ev.emit('tutorial',1,1);

class raj extends EventEmitter{
    constructor(name){
        super();
        this.lname=name;
    }
    get name(){

        return this.lname;
    }
}

let raju=new raj('Rajesh');
raju.on('seed',()=>{
    console.log('Name of raj is :'+raju.name);
});


class person extends EventEmitter{
    constructor(name){
        super();
        this.fname=name;
    }
    get name(){
        return this.fname;}
}

let my= new person('Christina');

my.on('hello',()=>{
    console.log('Name of person is'+my.name);
});

my.emit('hello'); 
raju.emit('seed');

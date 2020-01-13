const getNotes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

const command = process.argv[2];

//console.log(process.argv);

yargs.version("1.1.0");

yargs.command({
    command: 'add',
    describe: 'Añade una nueva nota',
    handler: () => {
        console.log("Añadiendo una nueva nota!");
    }
});

yargs.command({
    command: 'remove',
    describe: 'Borra una nota',
    handler: () => {
        console.log("Borrando la nota");
    }
});

yargs.command({
    command: 'list',
    describe: 'Lista las notas',
    handler: () => {
        console.log('Listando todas las notas');
    }
});

yargs.command({
    command: 'read',
    describe: 'Lee una nota',
    handler: () => {
        console.log("Leyendo la nota");
    }
});

console.log(yargs.argv);

/*
switch (command){
    case "add": 
        console.log('Agregando nota!');
        break;
    case "remove":
        console.log('Borrando nota!');
        break;
}
*/
const notes = require('./notes');
const yargs = require('yargs');
const chalk = require('chalk');

const command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'Añade una nueva nota',
    builder: {
        title: {
            describe: 'Título Nota',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Cuerpo de la Nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Borra una nota',
    builder: {
        title: {
            describe: 'Título de la Nota',
            demandOption: true,
            type: 'string'

        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'Lista las notas',
    handler() {
        notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    describe: 'Lee una nota',
    builder:{
        title:{
            describe: 'Título de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse();
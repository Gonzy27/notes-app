const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if(!duplicateNote.length){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('Nueva nota agregada!'));
    }else{
        console.log(chalk.red.inverse('El titulo ingresado ya existe'));
    }

};

const removeNote = (title) => {
    console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter(({title: originalTitle}) => (originalTitle !== title));
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Nota borrada!'));
    }else{
        console.log(chalk.red.inverse('Nota no encontrada!'));
    }

};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Tus notas'))
    notes.forEach(note => {
        console.log(chalk.green.inverse('Titulo: ' + note.title));
    });;
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    }else{
        console.log(chalk.red.inverse('Nota no encontrada!'));
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e){
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
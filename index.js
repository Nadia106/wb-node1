const yargs = require("yargs")
const pkg = require("./package.json")
const {addNote, printNotes, removeNote} = require("./notes.controller")

yargs.command({
    command: "add",
    describe:"add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "note title",
            demandOption: true
        }
    },
    handler({title}) {
        addNote(title)
    }
})

yargs.command({
    command: "list",
    describe:"Print all notes",
    async handler() {
    printNotes()
    }
})

yargs.command({
    command: "remove",
    describe:"Remove note by id",
    builder: {
        id: {
            type: "string",
            describe: "Remove note",
            demandOption: true
        }
    },
    handler({id}){
        removeNote(id)
    }
})


yargs.parse()
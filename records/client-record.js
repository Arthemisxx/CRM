const {ValidationError} = require("../utils/error");

class ClientRecord {
    constructor(obj) {
        const {id, mail, name, nextContactAt, notes, surname} = obj;

        if(!id || typeof id !=='string'){
            throw new ValidationError('ID musi być niepustym tekstem')
        }

        if(!name || typeof name !=='string' || name.length <3){
            throw new ValidationError('Imię musi być tekstem o długości min. 3 znaków.')
        }

        if(!surname || typeof surname !=='string' || surname.length <3){
            throw new ValidationError('Nazwisko musi być tekstem o długości min. 3 znaków.')
        }

        if(!mail || typeof mail !=='string' || mail.indexOf('@') === -1){
            throw new ValidationError('Email nieprawidłowy')
        }

        if(typeof nextContactAt !=='string'){
            throw new ValidationError('Data następnego kontaktu musi być tekstem')
        }

        if(typeof notes !=='string'){
            throw new ValidationError('Notatki muszą być tekstem')
        }

        this.id = id;
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }

}

module.exports = {
    ClientRecord,
}

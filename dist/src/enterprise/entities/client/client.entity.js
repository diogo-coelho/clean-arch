"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(firstName, lastName, email, cpf) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._cpf = cpf;
        this._email = email;
    }
    get fistName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get email() {
        return this._email;
    }
    get cpf() {
        return this._cpf;
    }
}
exports.Client = Client;

export enum generoEnum {
    hombre,
    mujer
}
export class User {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: string,
        public isOk: boolean,
        public genero?: string,
        public comentario?: string
    ) { }
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    weightList: string[];
    imc: string[];
    dietList: string[];
}

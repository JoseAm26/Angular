// import { Person } from './08-Clases';

export class Person {
    // public name: string;
    // private address: string;

    constructor( 
        public firstName: string,
        public lastName: string,
        private address: string = 'No addres') 
        {
        // this.name = name;
        // this.address = address;
    }
}

// export class Rapero extends Person {
//     constructor(
//         public nick: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super( realName, 'Ibiza' );
//     }
// }

export class Rapero {

    // public per: Person;

    constructor(
        public nick: string,
        public age: number,
        public realName: string,
        public per: Person,
    ) {
        // this.person = new Person(realName);
    }
}

// const persona = new Person('Fernando');

const fer = new Person('Fernado', 'Costa', 'Ibiza');

const persona = new Rapero('Fernandito', 28, 'Fernando', fer);

console.log(persona);
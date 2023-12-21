
function ClassDecorator<T extends { new ( args:any[]): {} }>( cosntructor: T ) {
    return class extends cosntructor {
        newProperty = 'New Property';
        hello = 'Hola Mundo';
    }
}


@ClassDecorator
export class SuperClas {
    public myProperty: string = 'abc123';

    print() {
        console.log('Hola mundo');
    }
}

console.log(SuperClas);

const myClass = new SuperClas;
console.log(myClass);
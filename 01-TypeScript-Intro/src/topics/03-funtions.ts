
function addnumbers(a: number, b: number){

    return a + b;

}

const addnumbersArrow = (a: number, b:number):string => {
    
    return `${a + b}`;

}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){

        return firstNumber * base;

}

// const result: number =  addnumbers(1, 2);
// const result2: string = addnumbersArrow(3, 4);
// const resultM: number = multiply(5);

// console.log({result, result2, resultM});

interface CartaJugador{
    nombre: string;
    media: number; 
    VerCarta: () => void;
} 

const NuevaMedia = ( nombre: CartaJugador, media: number ) => {

    nombre.media += media;

}  

const Carta: CartaJugador = {

    nombre: 'Jose', 
    media: 88,
    VerCarta() {
        console.log(`Esta es la carta ${this.media}`);
    }

}

NuevaMedia( Carta, 2 );

Carta.VerCarta();

export{};
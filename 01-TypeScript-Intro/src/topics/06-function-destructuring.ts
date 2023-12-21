
export interface Product {
    descripcion: string;
    precio: number;
}



const phone: Product = {
    descripcion: 'Iphone 14  Pro', 
    precio: 1200

}

const ps5: Product = {
    descripcion: 'Play Station 5',
    precio: 500
}


export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [ number, number ] {

    let total = 0;
   
    const { products:prod, tax:ta } = options;

    console.log(options);

    prod.forEach( ({precio}) => {
        total += precio 
    });

    return[total, total * ta];

}

// const carrito = [phone, ps5];
// export const tax = 0.15;

// const [ t1, t2] = taxCalculation({
//     products: carrito,
//     tax: tax,
// })

// // const [ t1, t2 ]: number[] = result;

// console.log('Total', t1);
// console.log('Tax', t2);

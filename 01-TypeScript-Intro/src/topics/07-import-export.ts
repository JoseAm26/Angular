import { Product, taxCalculation } from './06-function-destructuring';
// import {  } from './06-function-destructuring';
// import { TaxCalculationOptions } from './06-function-destructuring';
// import { tax } from './06-function-destructuring';


const shoppingCart: Product[] = [
    {
        descripcion: 'Samsung', 
        precio: 550
    },
    {
        descripcion: 'Pc',
        precio: 1199
    }
];


const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total', total);
console.log('Tax', tax);
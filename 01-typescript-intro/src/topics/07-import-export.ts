import { Product } from './06-function-destructuring'
import { taxCalculation } from './06-function-destructuring';

const ShoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100,
    },
    {
        description: 'Ipad',
        price: 150
    }

];

const [total, tax] = taxCalculation({ 
    products:ShoppingCart,
    tax: 0.15

});

console.log('Total',total);
console.log('Tax',tax);
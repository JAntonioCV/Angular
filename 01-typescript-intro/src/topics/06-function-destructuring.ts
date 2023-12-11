export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A1",
    price: 150
}

const tablet: Product = {
    description: "Ipad Air",
    price: 250 
}

const products = [phone, tablet];

const tax = 0.15;

interface TaxCalclulationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation({tax, products}: TaxCalclulationOptions): [number,number] {
    let total = 0;
    
    products.forEach(({price}) => {
        total += price
    })

    return [total, total * tax];
}

const [total, taxtotal] = taxCalculation({
    products,
    tax,
})

console.log('Total', total);
console.log('Tax', taxtotal);


export { }

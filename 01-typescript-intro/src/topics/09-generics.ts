export function whatsMyType<T>(argument: T): T{

    return argument 
}

let amiString = whatsMyType<string>('Hola mundo');
let amiNumber = whatsMyType<Number>(100);
let amiArray = whatsMyType<number[]>([1,2,3,4,5]);


console.log(amiString.split(' '));
console.log(amiNumber.toFixed());
console.log(amiArray.join('-'));


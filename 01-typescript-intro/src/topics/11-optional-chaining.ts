export interface Passenger{
    name: string;
    childrens?: string[];
}

const passenger1: Passenger = {
    name: "Fernando",
}
const passenger2: Passenger = {
    name: "Melissa",
    childrens: ['Natalia', 'Elizabeth'],
}

const printChildren = ( passenger: Passenger ) => {
    const howManyChildren = passenger.childrens?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger2);


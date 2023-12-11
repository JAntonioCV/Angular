export class Person{
    // public name: string;
    // public addres: string;

    constructor(
        public name: string = 'No Name',
        public lastName: string,
        private address: string = 'No Addrres')
    {}

}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super('Iron Man','New York')
//     }
// }

export class Hero {

    //public person: Person,

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}


const tony = new Person('Tony','Stark','New York');

const ironman = new Hero("Josiel",45,"Tony",tony);

console.log(ironman);
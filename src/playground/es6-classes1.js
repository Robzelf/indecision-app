class Person {

    constructor( name = "Anonymous", age = 0 ) {// get's called when instance is created
        this.name = name; // this is only set to this instance
        this.age = age;
    }


    getGreets() {
        // return '\'sup '+ this.name + "?";
        return `Hi I am ${this.name}`;
    }


    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    } 
}


class Student extends Person {
    
    constructor(  name, age, education ){
        super( name, age ); // get props form parent instance 'Person'
        this.education = education;
    }  

    hasEducation() {
        return !!this.education
    }

    getDescription() {
        let description = super.getDescription(); // call function from parent 'Person'

        if( this.hasEducation() ) {
            description += ` Their education is ${this.education} `;
        }

        return description;
    }
}


class Traveler extends Person {

    constructor( name, age, city ) {

        super(name, age);
        this.city = city;
    }

    hasCity() {
        return !!this.city;
    }

    getDescription() {

        let desc = super.getDescription();

        if( this.hasCity()) {
            desc += `and i am from: ${this.city}`;
        }

        return desc;
    }
}


// const me = new Student('Rob Peters', '43', 'CMD' );
const test = new Traveler('Rob', '43', 'Rotterdam' );
console.log( test.getDescription() );
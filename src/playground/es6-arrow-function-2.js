const _add =  ( a, b ) => {
    
    return a+b;
}
// console.log( _add(1,2)) ;


const _usr = {
    name: 'Vincent Vega',
    cities: ['Amsterdam','Los Angeles'],
    printPLacesLived() { // a method can be noted like this
        return this.cities.map((_c) => this.name + " has lived in "+ _c);

        // this.cities.forEach((_c ) => {
        //    console.log( this.name+ "has lived in "+_c); 
        // }); 
    }
}

// console.log( _usr.printPLacesLived() );


const _multiplier = {
    _numbers:[1,6,8],
    _multipier:2,
    mulitply() { // a method can be noted like this
        return this._numbers.map( (_n) => _n * this._multipier ); 
    } 
}

console.log( _multiplier.mulitply() );
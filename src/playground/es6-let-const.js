var nameVar = "Vincent";
var nameVar = "Jules";
// console.log( 'nameVar', nameVar );

let nameLet = "Marcellus";
nameLet = "Mia";
// console.log( 'nameLet', nameLet );


const nameConst = "Wolfman";
// console.log( 'nameConst', nameConst );


// block level scoping
const _fullname = "Jules Winfield";

let _firstname;

if( _fullname ) {
    _firstname = _fullname.split(' ')[0];
    console.log(_firstname);
}

console.log(_firstname);
// es5
function _square( x ) {
    return x * x;
};
// console.log(_square(6));

// es6
// const _squareArrow = ( x ) => {
//     return x * x;
// };

// doesnt need function body with single return value
const _squareArrow = (x) => x * x;
 
// console.log(_squareArrow(9));
const _fullName = "Vincent Vega";

const _getFirstName = ( _n ) => {
    return _fullName.split(" ")[0];
}

const _getFirstNameShorthand = ( _n ) => _fullName.split(" ")[0];

console.log( _getFirstName(_fullName ) );
console.log( _getFirstNameShorthand(_fullName ) );

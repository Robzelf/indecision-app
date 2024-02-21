class Counter extends React.Component {
    
    constructor (props) {
        super(props); // don't forget props!
        this.handleAddone   = this.handleAddone.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset    = this.handleReset.bind(this);

        this.state = {
            count: 0,
        };
    }

    handleAddone() {
        
        this.setState( ( prevState ) => {
            return {
                count : prevState.count + 1
            }
        });
    }

    handleMinusOne() {

        this.setState( ( prevState ) => {
            return {
                count : prevState.count - 1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count : 0
            }
        });
    }


    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'),10);
            if( !isNaN( count) ) {
                this.setState( ()  => ({
                    count
                }));
            } 

        } catch(error) {
            console.log('error loading local storage')
        }
    }

    componentDidUpdate( prevProps, prevSate  ) {
        
        if( prevSate.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    
    render() {
        return (
            <div>
                <h1>Count: { this.state.count } </h1>
                <button onClick={this.handleAddone}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>

        );
    }
}
 

ReactDOM.render( <Counter  />, document.querySelector('#app') );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }


// const appRoot  = document.getElementById("app");

// const renderCounterApp = () => {
    
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );
    
//     ReactDOM.render( templateTwo, appRoot );
// };

// renderCounterApp();
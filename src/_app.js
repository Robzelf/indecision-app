class IndecisionApp extends React.Component {


    constructor(props) {
        super(props);
        
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: [],
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if( options ) {
                this.setState(() =>({ options }));
            }

        } catch(e) {
            // do nut'n
        }
    }

    componentDidUpdate( prevProps, prevState ) {
        if( prevState.options.length !== this.state.options.length  ) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    componentWillUnmount() {
        console.log('will unmount');
    }

    handleDeleteOptions() {
        this.setState( () => ({ options : [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const _pick = this.state.options[  Math.floor( Math.random( ) * this.state.options.length ) ];
        console.log(_pick);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf(option) > -1 ) {
            return 'Option already exists';
        } 

        this.setState( (prevState) => ({
            options: prevState.options.concat(option)       
        }));
    }

    render() {

        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}  />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

 

const Header = (props) => {
    return (
        <div>
            <h1>{ props.title }</h1>
            {
                props.subtitle && <h2>{ props.subtitle }</h2>
            }
        </div>
    );
}

Header.defaultProps = {
    title: "Indecision"
}

const Action = (props) => {   
    return (
        <div>
            <button
            disabled={!props.hasOptions}
            onClick={props.handlePick}  >
                Wat should I Do?
            </button>
        </div>
    );
}
 


const Options = (props) => {
    return ( 
        <div>
            <button onClick={props.handleDeleteOptions }>Remove all</button>
            { props.options.length === 0 && <p>Please add an option, to get started.</p>}
            {
                props.options.map((_el, i) => (
                    <Option 
                        key={i} 
                        optionText = { _el } 
                        handleDeleteOption={props.handleDeleteOption}
                        />
                    
                ))
            }
        </div>
    );
}


const Option = (props) => {
    return (
        <div>
            { props.optionText }
            <button 
                onClick={(e) =>{
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
}


class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleAddOption( e ) {
        e.preventDefault();

        const _option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption( _option );

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type ="text" name="option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render( <IndecisionApp  />, document.querySelector('#app') );
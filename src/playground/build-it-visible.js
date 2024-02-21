class VisibilityTottle  extends React.Component {
    constructor (props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {

        this.setState( (prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                {this.state.visibility && ( <p>Deets</p> ) }
                <button onClick={this.handleToggleVisibility}>
                { this.state.visibility ? 'Hide deets' : 'Show deets' }</button>
            </div>
        );
    }
}

const _appRoot = document.querySelector("#app");
ReactDOM.render( <VisibilityTottle />, _appRoot );
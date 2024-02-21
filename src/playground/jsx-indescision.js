
// JSX - Javascript XML

const _app = {
    title: 'Indecision App',
    subtitle: 'App desc',
    options: []
}

const numbers = [55,101,1000];


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if( option ) {
        _app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const clearOptions = () => {
    _app.options = [];
    renderApp();
};

const onMakeDescision = () => {

    const randonmNum = Math.floor(Math.random() * _app.options.length);
    const option = _app.options[randonmNum];
    console.log(option);
};


const appRoot  = document.getElementById("app");

const renderApp = () => {

    const template = (
        <div>
            <h1>{ _app.title }</h1>
            <p> { _app.options.length > 0 ? "Here are your options" : "There are no options"  } </p>
            <p>{ _app.options.length }</p>
            { _app.subtitle && <p>{ _app.subtitle }</p> }
            <p>{ ( _app.options.length > 0 ) ? 'There are options' :'There are no options' }</p> 
            <button disabled={ _app.options.length === 0 } onClick={onMakeDescision}>What should i Do?</button>
            <button onClick={clearOptions}>Remove all</button>
            <ol>
                {
                    _app.options.map( (_o) => <li key={_o}>{_o}</li> ) 
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();



// Without using React Components and States

/*

console.log("Visibility Toggle");

let strToggle = 'Show Details';
let flag = false;
const toggle = () => {
    if (strToggle == 'Show Details'){
        strToggle = 'Hide Details!'
        flag = true;
    } else{
        strToggle = 'Show Details';
        flag = false;
    }
    console.log("hey");
    render();
};

const appRoot = document.getElementById("app");

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle App</h1>
            <button onClick={toggle}>{strToggle}</button>
            {flag && <p>Here are your details!</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();   */

class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        };
    }

    toggle() {
        this.setState((prev) => {
            return {
                visibility: !prev.visibility 
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle App</h1>
            <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visibility && (
                <div>
                <p>Hey! Details here.</p>
                </div>
            )}
            </div>
        );
    }

}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'));
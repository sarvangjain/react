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

render();
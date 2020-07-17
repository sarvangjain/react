
class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
			<Header />
			<Action />
			<Options />
			<AddOption />
			</div>
		);
	};
};

class Header extends React.Component {
	render(){
		return (
			<div> 
				<h1>Indecision App</h1>
				<h2>Put your life in the hands of a computer</h2>
			</div>
		);
	};
};

class Action extends React.Component {
	render() {
		return (
			<div>
				<button> What should I do?</button>
			</div>
		);
	};
};

class Option extends React.Component {
	render(){
		return (
			<p>Option</p>
		);
	};
};

class Options extends React.Component {
	render() {
		return (
			<div>
			<p>Options Components here</p>
			<ol>
				<li><Option /></li>
				<li><Option /></li>				
			</ol>
			</div>
			
		);
	};
};

class AddOption extends React.Component {
	render(){
		return (
			<div>
				<p> AddOption Component here</p>
				<button>Add Option</button>
			</div>
		);
	}
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
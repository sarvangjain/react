import React from 'react'

const Option = (props) => (
	<div className="option">
		<p className="option__text">{props.count}. {props.opt}</p>
		<button
			className="button button--link" 
			onClick={(e) => {
				props.handleDeleteOption(props.opt);
			}}
		>
			Remove
		</button>
	</div>
);
    
export default Option;
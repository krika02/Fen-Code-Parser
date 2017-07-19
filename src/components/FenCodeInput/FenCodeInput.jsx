import React from 'react';
import PropTypes from 'prop-types';

class FenCodeInput extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.parseFernCode(this.input.value);
	}

	bindInput = (input) => {
		this.input = input;
	}

	render() {
		return (
			<div>
				{!this.props.valid &&
					<p>Code not valid</p>
				}
				<form onSubmit={this.handleSubmit}>
					<input required type="text" ref={input => this.bindInput(input)} placeholder="Fen Code" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

FenCodeInput.propTypes = {
	valid: PropTypes.bool.isRequired,
	parseFernCode: PropTypes.func.isRequired,
};

export default FenCodeInput;

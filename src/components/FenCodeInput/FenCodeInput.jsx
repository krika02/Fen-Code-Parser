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

	updateInput = (input) => {
		this.input = input;
	}

	render() {
		return (
			<div>
				{this.props.error &&
					<p>{this.props.errorMessage}</p>
				}
				<form onSubmit={this.handleSubmit}>
					<input required type="text" ref={input => this.updateInput(input)} placeholder="Fen Code" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

FenCodeInput.propTypes = {
	error: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string.isRequired,
	parseFernCode: PropTypes.func.isRequired,
};

export default FenCodeInput;

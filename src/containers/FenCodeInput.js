import { connect } from 'react-redux';
import fenCodeActions from '../actions/fenCode';
import FenCodeInputComponent from '../components/FenCodeInput/FenCodeInput';

const mapStateToProps = state => ({ valid: state.fenCode.valid });

const mapDispatchToProps = dispatch => ({
	parseFernCode: (fenCode) => {
		if (!fenCode) {
			return;
		}

		dispatch(fenCodeActions.parse(fenCode));
	},
});

const FernCodeInput = connect(mapStateToProps, mapDispatchToProps)(FenCodeInputComponent);

export default FernCodeInput;

import { connect } from 'react-redux';
import BoardComponent from '../components/Board/Board';

const mapStateToProps = state => ({
	field: state.fenCode.field,
});

const GameField = connect(mapStateToProps)(BoardComponent);

export default GameField;

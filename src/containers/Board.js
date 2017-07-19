import { connect } from 'react-redux';
import BoardComponent from '../components/Board/Board';

const mapStateToProps = state => ({
	field: state.fenCode.field,
	turn: state.fenCode.turn,
	castling: state.fenCode.castling,
	enPassant: state.fenCode.enPassant,
	halfMoveClock: state.fenCode.halfMoveClock,
	fullMoveNumber: state.fenCode.fullMoveNumber,
});

const GameField = connect(mapStateToProps)(BoardComponent);

export default GameField;

import React from 'react';
import PropTypes from 'prop-types';
import Block from '../Block/Block';

require('./Board.css');

const Board = props =>
	(<div>
		<div className="board">
			{props.field.map(blocks =>
								(blocks.map(block =>
									(<Block
										piece={block.piece}
									/>))),
							)
						}
		</div>
		{props.field.length > 0 &&
		<ul className="stats">
			<li>{props.turn}</li>
			<li>{props.castling}</li>
			<li>{props.enPassant}</li>
			<li>{props.halfMoveClock}</li>
			<li>{props.fullMoveNumber}</li>
		</ul>
	}
	</div>);

Board.propTypes = {
	field: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
		piece: PropTypes.string.isRequired,
	}))).isRequired,
	turn: PropTypes.string.isRequired,
	castling: PropTypes.string.isRequired,
	enPassant: PropTypes.string.isRequired,
	halfMoveClock: PropTypes.string.isRequired,
	fullMoveNumber: PropTypes.string.isRequired,
};

export default Board;

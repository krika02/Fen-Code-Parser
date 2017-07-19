import React from 'react';
import PropTypes from 'prop-types';
import Block from '../Block/Block';

require('./Board.css');

const Board = props =>
	(<div className="board">
		{props.field.map(blocks =>
							(blocks.map(block =>
								(<Block
									piece={block.piece}
								/>))),
						)
          }
	</div>);

Board.propTypes = {
	field: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
		piece: PropTypes.string.isRequired,
	}))).isRequired,
};

export default Board;

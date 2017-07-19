const fenCodeConstants = {
	ACTION_PARSE: 'ACTION_PARSE_FEN_CODE',
	VALID_SPECED_SECTIONS: [5, 6],
	INITIAL_STATE: {
		error: false,
		field: [],
		errorMessage: ' ',
		turn: ' ',
		castling: ' ',
		enPassant: ' ',
		halfMoveClock: ' ',
		fullMoveNumber: ' ',
	},
};

export default fenCodeConstants;

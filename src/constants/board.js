const board = {
	ROW_LENGTH: 8,
	PIECES: {
		WHITE: {
			KING: {
				CODE: 'K',
				CHAR: '♔',
			},
			QUEEN: {
				CODE: 'Q',
				CHAR: '♕',
			},
			ROOK: {
				CODE: 'R',
				CHAR: '♖',
			},
			BISHOP: {
				CODE: 'B',
				CHAR: '♗',
			},
			KNIGHT: {
				CODE: 'N',
				CHAR: '♘',
			},
			PAWN: {
				CODE: 'P',
				CHAR: '♙',
			},
		},
		BLACK: {
			KING: {
				CODE: 'k',
				CHAR: '♚',
			},
			QUEEN: {
				CODE: 'q',
				CHAR: '♛',
			},
			ROOK: {
				CODE: 'r',
				CHAR: '♜',
			},
			BISHOP: {
				CODE: 'b',
				CHAR: '♝',
			},
			KNIGHT: {
				CODE: 'n',
				CHAR: '♞',
			},
			PAWN: {
				CODE: 'p',
				CHAR: '♟',
			},
		},
	},
};

export default board;

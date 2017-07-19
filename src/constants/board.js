const board = {
	ROW_LENGTH: 8,
	CASTLING: {
		KQKQ: {
			CODE: 'KQkq',
			TEXT: 'White and black can castle either side',
		},
		KQK: {
			CODE: 'KQk',
			TEXT: 'White can castle either side, black kingside',
		},
		KQQ: {
			CODE: 'KQq',
			TEXT: 'White can castle either side, black queenside',
		},
		KKQ: {
			CODE: 'Kkq',
			TEXT: 'White can castle either side, black queenside',
		},
		KK: {
			CODE: 'Kk',
			TEXT: 'White and black can castle kingside',
		},
		KQ: {
			CODE: 'Kq',
			TEXT: 'White can castle kingside, black can castle queenside',
		},
		K: {
			CODE: 'K',
			TEXT: 'White can castle kingside, black is not allowed to castle',
		},
		QKQ: {
			CODE: 'Qkq',
			TEXT: 'White can castle queenside, black can castle either side',
		},
		QK: {
			CODE: 'Qk',
			TEXT: 'White can castle queenside, black can castle kingside',
		},
		QQ: {
			CODE: 'Qq',
			TEXT: 'White and black can castle queenside',
		},
		Q: {
			CODE: 'Q',
			TEXT: 'White can castle queenside, black is not allowed to castle',
		},
		KQ2: {
			CODE: 'kq',
			TEXT: 'Black can castle either side, white is not allowed to castle',
		},
		K2: {
			CODE: 'k',
			TEXT: 'Black can castle kingside, white is not allowed to castle',
		},
		Q2: {
			CODE: 'q',
			TEXT: 'Black can castle queenside, white is not allowed to castle',
		},
		NONE: {
			CODE: '-',
			TEXT: 'Neither side is allowed to castle',
		},
	},
	TURN: {
		WHITE: {
			CODE: 'w',
			TEXT: 'Next turn: White',
		},
		BLACK: {
			CODE: 'b',
			TEXT: 'Next turn: Black',
		},
	},
	WHITE: 'White',
	BLACH: 'Black',
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

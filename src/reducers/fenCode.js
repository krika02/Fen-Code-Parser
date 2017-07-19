import fenCodeConstants from '../constants/fenCode';
import boardConstants from '../constants/board';

const parseCode = (c) => {
	switch (c) {
		case boardConstants.PIECES.WHITE.KING.CODE:
			return boardConstants.PIECES.WHITE.KING.CHAR;
		case boardConstants.PIECES.WHITE.QUEEN.CODE:
			return boardConstants.PIECES.WHITE.QUEEN.CHAR;
		case boardConstants.PIECES.WHITE.ROOK.CODE:
			return boardConstants.PIECES.WHITE.ROOK.CHAR;
		case boardConstants.PIECES.WHITE.BISHOP.CODE:
			return boardConstants.PIECES.WHITE.BISHOP.CHAR;
		case boardConstants.PIECES.WHITE.KNIGHT.CODE:
			return boardConstants.PIECES.WHITE.KNIGHT.CHAR;
		case boardConstants.PIECES.WHITE.PAWN.CODE:
			return boardConstants.PIECES.WHITE.PAWN.CHAR;
		case boardConstants.PIECES.BLACK.KING.CODE:
			return boardConstants.PIECES.BLACK.KING.CHAR;
		case boardConstants.PIECES.BLACK.QUEEN.CODE:
			return boardConstants.PIECES.BLACK.QUEEN.CHAR;
		case boardConstants.PIECES.BLACK.ROOK.CODE:
			return boardConstants.PIECES.BLACK.ROOK.CHAR;
		case boardConstants.PIECES.BLACK.BISHOP.CODE:
			return boardConstants.PIECES.BLACK.BISHOP.CHAR;
		case boardConstants.PIECES.BLACK.KNIGHT.CODE:
			return boardConstants.PIECES.BLACK.KNIGHT.CHAR;
		case boardConstants.PIECES.BLACK.PAWN.CODE:
			return boardConstants.PIECES.BLACK.PAWN.CHAR;
		default:
			return c;
	}
};

const isDigit = c => /^\d$/.test(c);
const notValid = state => Object.assign({}, state, {
	valid: false,
	field: [],
});

module.exports = (state = {}, action) => {
	switch (action.type) {
		case fenCodeConstants.ACTION_PARSE: {
			const field = [];

			let fenCode = action.fenCode;

      // We can remove everything after the first space
      // Since we are only interested in the position of the pieces

			fenCode = fenCode.split(' ')[0];

      // Split rows

			const rows = fenCode.split('/');
			if (rows.length !== boardConstants.ROW_LENGTH) {
				return notValid(state);
			}

      // Parse each row

			for (let y = 0; y < boardConstants.ROW_LENGTH; y += 1) {
				if (rows[y].length > boardConstants.ROW_LENGTH) {
					return notValid(state);
				}
				field[y] = [];
				for (let x = 0; x < boardConstants.ROW_LENGTH; x += 1) {
					const c = rows[y][x];
					if (!c) {
						break;
					}
					const symbol = parseCode(c);
					if (isDigit(symbol)) {
						const n = parseInt(symbol, 10);
						for (let i = 0; i < n; i += 1) {
							field[y].push({
								piece: '-',
							});
						}
					} else {
						field[y].push({
							piece: symbol,
						});
					}
				}

				if (field[y].length !== boardConstants.ROW_LENGTH) {
					return notValid(state);
				}
			}

			return Object.assign({}, state, {
				valid: true,
				field,
			});
		}
		default:
			return state;
	}
};

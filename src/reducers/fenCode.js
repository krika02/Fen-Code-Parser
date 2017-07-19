import fenCodeConstants from '../constants/fenCode';
import boardConstants from '../constants/board';

const parsePiece = (fcPiece) => {
	switch (fcPiece) {
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
			return fcPiece;
	}
};

const parseTurn = (fcTurn) => {
	switch (fcTurn) {
		case boardConstants.TURN.WHITE.CODE:
			return boardConstants.TURN.WHITE.TEXT;
		case boardConstants.TURN.BLACK.CODE:
			return boardConstants.TURN.BLACK.TEXT;
		default:
			return null;
	}
};

const parseCastling = (fcCastling) => {
	switch (fcCastling) {
		case boardConstants.CASTLING.KQKQ.CODE:
			return boardConstants.CASTLING.KQKQ.TEXT;
		case boardConstants.CASTLING.KQK.CODE:
			return boardConstants.CASTLING.KQK.TEXT;
		case boardConstants.CASTLING.KQQ.CODE:
			return boardConstants.CASTLING.KQQ.TEXT;
		case boardConstants.CASTLING.KK.CODE:
			return boardConstants.CASTLING.KK.TEXT;
		case boardConstants.CASTLING.KQ.CODE:
			return boardConstants.CASTLING.KQ.TEXT;
		case boardConstants.CASTLING.K.CODE:
			return boardConstants.CASTLING.K.TEXT;
		case boardConstants.CASTLING.QKQ.CODE:
			return boardConstants.CASTLING.QKQ.TEXT;
		case boardConstants.CASTLING.QK.CODE:
			return boardConstants.CASTLING.QK.TEXT;
		case boardConstants.CASTLING.QQ.CODE:
			return boardConstants.CASTLING.QQ.TEXT;
		case boardConstants.CASTLING.Q.CODE:
			return boardConstants.CASTLING.Q.TEXT;
		case boardConstants.CASTLING.KQ2.CODE:
			return boardConstants.CASTLING.KQ2.TEXT;
		case boardConstants.CASTLING.K2.CODE:
			return boardConstants.CASTLING.K2.TEXT;
		case boardConstants.CASTLING.Q2.CODE:
			return boardConstants.CASTLING.Q2.TEXT;
		case boardConstants.CASTLING.NONE.CODE:
			return boardConstants.CASTLING.NONE.TEXT;
		default:
			return null;
	}
};

const isDigit = c => /^\d$/.test(c);
const notValid = (errorMessage = 'Code not valid') => Object.assign({}, fenCodeConstants.INITIAL_STATE, {
	valid: false,
	errorMessage,
});

module.exports = (state = {}, action) => {
	switch (action.type) {
		case fenCodeConstants.ACTION_PARSE: {
			if (!action.fenCode) {
				return notValid();
			}

			const splittedFenCode = action.fenCode.split(' ');

			if (fenCodeConstants.VALID_SPECED_SECTIONS.indexOf(splittedFenCode.length) === -1) {
				return notValid();
			}

			const field = [];
			let turn = null;
			let castling = null;
			let enPassant = null;
			let halfMoveClock = null;
			let fullMoveNumber = null;

			const fcField = splittedFenCode[0];
			const fcTurn = splittedFenCode[1];
			const fcCastling = splittedFenCode[2];
			const fcEnPassant = splittedFenCode[3];
			const fcHalfMoveClock = splittedFenCode[4];
			const fcFullMoveNumber = splittedFenCode[5];

			// Parse field
      // Split rows

			const rows = fcField.split('/');
			if (rows.length !== boardConstants.ROW_LENGTH) {
				return notValid(`There should be ${boardConstants.ROW_LENGTH} rows, got ${rows.length}`);
			}

      // Parse each row

			for (let y = 0; y < boardConstants.ROW_LENGTH; y += 1) {
				if (rows[y].length > boardConstants.ROW_LENGTH) {
					return notValid(`Section ${y} is too long`);
				}
				field[y] = [];
				for (let x = 0; x < boardConstants.ROW_LENGTH; x += 1) {
					const c = rows[y][x];
					if (!c) {
						break;
					}
					const symbol = parsePiece(c);
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
					return notValid(`Section ${y} is not ${boardConstants.ROW_LENGTH} long`);
				}
			}

			// Parse turn

			turn = parseTurn(fcTurn);
			if (turn === null) {
				return notValid('Could not parse turn');
			}

			// Parse castling

			castling = parseCastling(fcCastling);
			if (castling === null) {
				return notValid('Could not parse castling');
			}

			// En passant

			if (fcEnPassant === '-') {
				enPassant = 'Last move was not a two-square move by a pawn';
			} else {
				enPassant = `A pawn has just made a two-square move, ${fcEnPassant} is the position "behind" the pawn`;
			}

			// Half move clock

			if (!isDigit(fcHalfMoveClock)) {
				return notValid('Could not parse half move clock');
			}

			halfMoveClock = `Half move clock ${parseInt(fcHalfMoveClock, 10)}`;

			// Full move number

			if (!isDigit(fcFullMoveNumber)) {
				return notValid('Could not parse full move number');
			}

			fullMoveNumber = `Full move number ${parseInt(fcFullMoveNumber, 10)}`;

			return Object.assign({}, fenCodeConstants.INITIAL_STATE, {
				field,
				turn,
				castling,
				enPassant,
				halfMoveClock,
				fullMoveNumber,
			});
		}

		default:
			return state;
	}
};

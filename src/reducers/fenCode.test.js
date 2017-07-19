import fenCodeActions from '../actions/fenCode';
import fenCodeConstants from '../constants/fenCode';
import boardConstants from '../constants/board';
import fenCodeReducer from './fenCode';

describe('reducers/fenCode parse', () => {

  const validFenCode = 'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2';
  const invalidFenCode = 'rnbbnr/pppppp/8/2p5/4P3/5N2/PP1PPP/RNKB1R b KQkq - 1 2';

	it('parse valid fen code should return correct state', () => {

    const state = fenCodeReducer(undefined, fenCodeActions.parse(validFenCode));

		expect(state.valid);
    expect(state.field.length === boardConstants.ROW_LENGTH);
    expect(state.field[0].length === boardConstants.ROW_LENGTH);
	});

  it('parse invalid fen code should return correct state', () => {

    const state = fenCodeReducer(undefined, fenCodeActions.parse(invalidFenCode));

    expect(!state.valid);
  });
});

import fenCodeActions from './fenCode';
import fenCodeConstants from '../constants/fenCode';

describe('actions/fenCode parse', () => {
	it('parse should create ACTION_PARSE action', () => {
		expect(fenCodeActions.parse.type === fenCodeConstants.ACTION_PARSE);
	});
});

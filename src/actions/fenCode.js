import fenCodeConstants from '../constants/fenCode';

const fenCodeActions = {
	parse(fenCode) {
		return { type: fenCodeConstants.ACTION_PARSE, fenCode };
	},
};

export default fenCodeActions;

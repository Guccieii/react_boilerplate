import * as types from '../actions/types';

const INIT_STATE = {
	stateName: null
};

export default function reducerName(state = INIT_STATE, action) {
	switch (action.type) {
		case types.TYPE_CASE:
			return {
				...state,
				stateName: action.stateName
			};
		default:
			return state;
	}
}

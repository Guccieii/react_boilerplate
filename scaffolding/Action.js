import { Dispatch } from 'redux';
import * as types from './types';

//Mostra loader
export function actionName() {
	return (dispatch: Dispatch) => {
		dispatch({
			type: types.START_LOADING
		});
	};
}

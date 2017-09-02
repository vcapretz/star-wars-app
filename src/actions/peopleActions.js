import swAPI from '../api/swAPI';
import * as types from './actionTypes'; 

export function loadPeople() {
    return dispatch => {
        return swAPI.getPeople()
            .then(people => {
                dispatch(loadSuccess(people));
            }).catch(error => {
                throw (error);
            });
    };
}

export function loadSuccess(people) {
    return { type: types.LOAD_PEOPLE_SUCCESS, people };
}

import swAPI from '../api/swAPI';
import * as types from './actionTypes';

export function loadPeople() {
    return function(dispatch) {
        return swAPI.getPeople()
            .then(people => {
                dispatch(loadSuccess(people.items));
            }).catch(error => {
                throw (error);
            });
    };
}

export function updatePerson(person) {
    return function(dispatch) {
        return swAPI.updatePerson(person)
            .then(response => {
                dispatch(updatePersonSuccess(response.result.data));
            }).catch(error => {
                throw (error);
            });
    };
}

export function loadSuccess(people) {
    return { type: types.LOAD_PEOPLE_SUCCESS, people };
}

export function updatePersonSuccess(person) {
    return { type: types.UPDATE_PERSON_SUCCESS, person }
}

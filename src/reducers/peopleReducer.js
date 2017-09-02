import { browserHistory } from 'react-router';

import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function peopleReducer(state = initialState.people, action) {
    switch (action.type) {
        case types.LOAD_PEOPLE_SUCCESS:
            return action.people;
        case types.CREATE_PERSON_SUCCESS:
            browserHistory.push(`/people/${action.person._id}`)
            return [
                ...state.filter(person => person._id !== action.person._id),
                Object.assign({}, action.person)
            ]
        case types.UPDATE_PERSON_SUCCESS:
            return [
                ...state.filter(person => person._id !== action.person._id),
                Object.assign({}, action.person)
            ];
        default:
            return state;
    }
}

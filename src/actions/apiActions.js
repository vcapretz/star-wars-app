import swAPI from '../api/swAPI';

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

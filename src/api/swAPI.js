class swAPI {
    static getPeople() {
        return fetch('http://localhost:5000/people/')
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }

    static updatePerson(person) {
        const updatedPerson = Object.assign({}, person);
        delete updatedPerson._id;
        delete updatedPerson.__v;

        const request = new Request(`http://localhost:5000/people/${person._id}`, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(updatedPerson)
        });

        return fetch(request)
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}

export default swAPI;

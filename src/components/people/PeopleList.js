import React from 'react';
import { PropTypes } from 'prop-types';

const PeopleList = ({ people }) => {
    return (
        <ul className='list-group'>
            {people.map(people =>
                <li className='list-group-item' key={people._id}>
                    {people.name}
                </li>
            )}
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleList; 
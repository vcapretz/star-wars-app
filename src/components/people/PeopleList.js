import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

const PeopleList = ({ people }) => {
    return (
        <ul className='list-group'>
            {people.map(person =>
                <li className='list-group-item' key={person._id}>
                    <Link to={`/people/${person._id}`}> { person.name }</Link>
                </li>
            )}
        </ul>
    );
};

PeopleList.propTypes = {
    people: PropTypes.array.isRequired
};

export default PeopleList;

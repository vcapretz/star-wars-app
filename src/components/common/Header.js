import React from 'react';
import { PropTypes } from 'prop-types';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to='/'
                activeClassName='active'>Home</IndexLink>
            {' | '}
            <Link to='/people' activeClassName='active'>People</Link>
        </nav>
    );
};

export default Header;  

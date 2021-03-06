import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';

import { connect } from 'react-redux';
import * as peopleActions from '../../actions/peopleActions';
import PeopleList from './PeopleList';

class PeoplePage extends React.Component {
    render() {
        const { people } = this.props;

        return (
            <div className='col-md-12'>
                <h1>People
                    <Link to={'/people/new'} className='btn btn-primary'>
                            new person
                    </Link>
                </h1>
                <div className='col-md-4'>
                    <PeopleList people={people} />
                </div>
                <div className='col-md-8'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

PeoplePage.propTypes = {
    people: PropTypes.array.isRequired,
    children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const { people } = state;
    return { people };
}

export default connect(mapStateToProps)(PeoplePage);

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class PersonPage extends React.Component {
    render() {
        return (
            <div className='col-md-8 col-md-offset-2'>
                <h1>{this.props.person.name}</h1>
                <p>Birth year: {this.props.person.birth_year}</p>
                <p>Eye color: {this.props.person.eye_color}</p>
            </div>
        );
    }
};

PersonPage.propTypes = {
    person: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
    let person = { name: '', birth_year: '', eye_color: '' };
    const personId = ownProps.params.id;

    if (state.people.length > 0) {
        person = Object.assign({}, state.people.find(person => person.id === personId));
    }

    return { person };
}

export default connect(mapStateToProps)(PersonPage);  
import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as peopleActions from '../../actions/peopleActions';
import PersonForm from './PersonForm';

class NewPersonPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: '',
                birth_year: '',
                eye_color: '',
                gender: '',
                hair_color: '',
                height: '',
                homeworld: '',
                mass: '',
                skin_color: '',
            },
            saving: false
        };

        this.save = this.save.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    updateState(event) {
        const field = event.target.name;
        const { person } = this.state;
        person[field] = event.target.value;

        return this.setState({ person });
    }

    save(event) {
        event.preventDefault();
        this.props.actions.createPerson(this.state.person);
    }

    render() {
        return (
            <div>
                <h1>New person</h1>
                <PersonForm
                    person={this.state.person}
                    onSave={this.save}
                    onChange={this.updateState} />
            </div>
        );
    }
}

NewPersonPage.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        name: '',
        birth_year: '',
        eye_color: '',
        gender: '',
        hair_color: '',
        height: '',
        homeworld: '',
        mass: '',
        skin_color: '',
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewPersonPage);

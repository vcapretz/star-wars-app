import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as peopleActions from '../../actions/peopleActions';
import PersonForm from './PersonForm';

class PersonPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            person: this.props.person
        };

        this.updateState = this.updateState.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.save = this.save.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.person._id != nextProps.person._id) {
            this.setState({ person: nextProps.person });
        }

        this.setState({saving: false, isEditing: false});
    }

    toggleEdit() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    updateState(event) {
        const field = event.target.name;
        const { person } = this.state;
        person[field] = event.target.value;

        return this.setState({ person });
    }

    save(event) {
        event.preventDefault();
        this.props.actions.updatePerson(this.state.person);
    }

    render() {
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>edit form</h1>
                    <PersonForm
                        person={this.state.person}
                        onSave={this.save}
                        onChange={this.updateState} />
                </div>
            );
        }

        return (
            <div className='col-md-8 col-md-offset-2'>
                <h1>{this.props.person.name}</h1>
                <p>Birth year: {this.props.person.birth_year}</p>
                <p>Eye color: {this.props.person.eye_color}</p>
                <p>Gender: {this.props.person.gender}</p>
                <p>Hair color: {this.props.person.hair_color}</p>
                <p>Height: {this.props.person.height}</p>
                <p>Homeworld: {this.props.person.homeworld}</p>
                <p>Mass: {this.props.person.mass}</p>
                <p>Skin color: {this.props.person.skin_color}</p>
                <button onClick={this.toggleEdit}
                    className='btn btn-default'>Edit</button>
            </div>
        );
    }
}

PersonPage.propTypes = {
    person: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let person = {
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
    const personId = ownProps.params.id;

    if (state.people.length > 0) {
        person = Object.assign({}, state.people.find(person => person._id === personId));
    }

    return { person };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(peopleActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonPage);

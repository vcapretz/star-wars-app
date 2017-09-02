import React from 'react';
import { PropTypes } from 'prop-types';

import TextInput from '../common/TextInput';

class PersonForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <TextInput
                        name='name'
                        label='name'
                        value={this.props.person.name}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='birth_year'
                        label='birth_year'
                        value={this.props.person.birth_year}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='eye_color'
                        label='eye_color'
                        value={this.props.person.eye_color}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='gender'
                        label='gender'
                        value={this.props.person.gender}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='hair_color'
                        label='hair_color'
                        value={this.props.person.hair_color}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='height'
                        label='height'
                        value={this.props.person.height}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='homeworld'
                        label='homeworld'
                        value={this.props.person.homeworld}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='mass'
                        label='mass'
                        value={this.props.person.mass}
                        onChange={this.props.onChange} />

                    <TextInput
                        name='skin_color'
                        label='skin_color'
                        value={this.props.person.skin_color}
                        onChange={this.props.onChange} />

                    <input
                        type='submit'
                        disabled={this.props.saving}
                        className='btn btn-primary'
                        onClick={this.props.onSave} />
                </form>
            </div>
        );
    }
}

PersonForm.propTypes = {
    person: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    saving: React.PropTypes.bool
};

export default PersonForm;

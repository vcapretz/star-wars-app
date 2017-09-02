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

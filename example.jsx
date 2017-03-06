import React from 'react';

import { connect } from 'react-redux'

export default class Form extends React.PureComponent {
    render() {
        return(
            <abstract-form>
            </abstract-form>
        );
    }
};

const mapDispatchToProps = (dispatch) => {}

Form = connect(
    undefined,
    mapDispatchToProps
)(Form);
Raw


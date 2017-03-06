import React from 'react';

import { connect } from 'react-redux'


export default class AttachmentList extends React.PureComponent {
    renderAttachments() {
        return(
            <div className="col-sm-12">
            </div>
        );
    }

    renderPanelBody() {
        return(
            <no-style>
            </no-style>
        );
    } 

    renderAddNew() {
        return (
            <div className="col-sm-12 form-group">
            </div>
        );
    }

    render() {
        return(
            <div className="panel panel-default">
            </div>
        );
    }
}

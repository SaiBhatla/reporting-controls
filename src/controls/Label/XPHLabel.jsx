import React from 'react';

export class XPHLabel extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div style={{ display: 'inline-block' }}>
                   <label >{this.props.labelText}</label>
            </div>
        );
    }
}
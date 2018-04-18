import React from 'react';
import { Switch } from '@progress/kendo-react-inputs';

export class XPHSwitch extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const selectedState = event.value;
            
        if(this.props.onChange !== undefined){
           this.props.onChange(selectedState);
        }
    }

    render() {
        
        return (
            <div style={{ display: 'inline-block' }}>
                   <Switch checked = {this.props.checked} onChange = {this.onChange} onLabel = {this.props.onLabel} offLabel = {this.props.offLabel} />
            </div>
        );
    }
}
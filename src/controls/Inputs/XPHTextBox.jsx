import React from 'react';
import { Input } from '@progress/kendo-react-inputs';

export class XPHTextBox extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const text = event.value;
            
        if(this.props.onChange !== undefined){
           this.props.onChange(text);
        }
    }

    render() {
        
        return (
            <div style={{ display: 'inline-block' }}>
                   <Input value = {this.props.value} onChange = {this.onChange} label = {this.props.label} />
            </div>
        );
    }
}
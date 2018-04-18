import React from 'react';
import { NumericTextBox, Input } from '@progress/kendo-react-inputs';

export class XPHNumericTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }


    onChange(event) {
        console.log(event);
        const updatedText = event.target.value;
        if(this.props.onChange !== undefined){
            this.props.onChange(updatedText);
        }
        
    }

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <NumericTextBox
                        placeholder="please enter value"
                        value={this.props.value}
                        onChange={this.onChange}
                    /> 
            </div>
        );
    }
}
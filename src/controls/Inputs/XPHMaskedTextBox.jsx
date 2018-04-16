import React from 'react';
import kendo from '@progress/kendo-ui';
import { MaskedTextBox} from '@progress/kendo-inputs-react-wrapper';
import { Validator } from '@progress/kendo-validator-react-wrapper';

export class XPHMaskedTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const updatedText = event.sender.raw();
        //const updatedText = event.sender.value();
        if(this.props.onChange !== undefined){
            this.props.onChange(updatedText);
        }
        
    }

    render() {
        return (
            <div>
                   <MaskedTextBox  
                        value={this.props.value}
                        mask={this.props.mask}
                        change={this.onChange} />
            </div>
        );
    }
}
import React from 'react';
import kendo from '@progress/kendo-ui';
import { MaskedTextBox} from '@progress/kendo-inputs-react-wrapper';

export class XPHMaskedTextBox extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const updatedText = event.sender.raw();
        let isValid = true;
        //const updatedText = event.sender.value();
        if(this.props.regex === undefined || 
            (this.props.regex !== undefined && this.validateRegex(updatedText, this.props.regex))){
            isValid = true;
        }
        else{
            isValid = false;
            }

        this.SetStyle(isValid);

        if(this.props.onChange !== undefined){
            this.props.onChange(updatedText);
        }
    }

    validateRegex(inputText, regex) {
        if (String(inputText).match(regex)) {
            return true;
        } else {
            return false;
        }
        return false;
    }

    SetStyle(isValid){
        console.log(isValid);
    }


    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                   <MaskedTextBox  
                        value={this.props.value}
                        mask={this.props.mask}
                        change={this.onChange} />
            </div>
        );
    }
}
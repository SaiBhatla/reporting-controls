import React from 'react';
import kendo from '@progress/kendo-ui';
import { MaskedTextBox} from '@progress/kendo-inputs-react-wrapper';

export class XPHMaskedTextBox extends React.Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            isValid: true,
          };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const updatedText = event.sender.raw();
        //const updatedText = event.sender.value();

        if(this.props.regex === undefined || 
            (this.props.regex !== undefined && this.validateRegex(updatedText, this.props.regex))){
                this.setState(prevState =>({
                    isValid: true
                  }));
        }
        else{
            this.setState(prevState =>({
                isValid: false
              }));
            }

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

    getStyle() {
        if(this.state.isValid){
        return {
            border: '5px solid green'
        }
    }
    else{
        return {
            border: '5px solid red'
        }
    }
       }


    render() {
        
        return (
            <div style={this.getStyle()}>
                   <MaskedTextBox 
                        value={this.props.value}
                        mask={this.props.mask}
                        change={this.onChange} />
            </div>
        );
    }
}
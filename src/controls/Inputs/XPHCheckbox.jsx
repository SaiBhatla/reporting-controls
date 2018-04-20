import React from 'react';
import { Input } from '@progress/kendo-react-inputs';

export class XPHCheckbox extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isChecked: this.props.isChecked,
          };


        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState(prevState =>({
            isChecked: !this.state.isChecked
          }), this.pushChanges());

        //const text = event.value;
    }

    pushChanges(){
        if(this.props.onChange !== undefined){
            console.log(this.state.isChecked);
            this.props.onChange(this.state.isChecked);
         }
    }

    render() {
        
        return (
            <div style={{ display: 'inline-block' }}>
                   <input type="checkbox" checked = {this.state.isChecked} onChange = {this.onChange} />
            </div>
        );
    }
}
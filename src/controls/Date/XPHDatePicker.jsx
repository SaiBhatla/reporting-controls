import React from 'react';
import { Calendar, DateInput, DatePicker } from '@progress/kendo-react-dateinputs';

export class XPHDatePicker extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if(event.target.show === false){
            const selectedDate = event.target.value;
            
           if(this.props.onChange !== undefined){
                this.props.onChange(selectedDate);
            }
        }
    }

    render() {
        
        return (
            <div style={{ display: 'inline-block' }}>
                   <DatePicker value = {this.props.value} onChange = {this.onChange} format = {this.props.format} />
            </div>
        );
    }
}
import React from 'react';
import { ComboBox } from '@progress/kendo-react-dropdowns';

export class XPHComboBox extends React.Component {

    constructor(props) {
        super(props);
        this.selectedItemChange = this.selectedItemChange.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }


    selectedItemChange(event) {
        const selectedItem = event.target.value;
        if(this.props.selectedItemChange !== undefined)
            this.props.selectedItemChange(selectedItem);
    }

    onOpen() {
        if (this.props.onOpen !== undefined) {
            this.props.onOpen('open');
        }
    }
    onClose() {
        if (this.props.onClose !== undefined) {
            this.props.onClose('close');
        }
    }
    onFocus() {
        if (this.props.onFocus !== undefined) {
            this.props.onFocus('focus');
        }
    }
    onBlur() {
        if (this.props.onBlur !== undefined) {
            this.props.onBlur('blur');
        }
    }
    onFilterChange(event) {
        if (this.props.onFilterChange !== undefined) {
            this.props.onFilterChange('filterChange', event.filter.value);
        }
    }

    render() {
        const { selectedItem, data,filterable } = this.props;
        if(data === undefined || data === null){
            return(
                <div></div>
            );
        }
        else{
            return (
                <div style={{ display: 'inline-block' }}>
                    <ComboBox
                        data={data}
                        onChange={this.selectedItemChange}
                        onOpen={this.onOpen}
                        onClose={this.onClose}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        onFilterChange={this.onFilterChange}
                        filterable={filterable}
                        placeholder={'Select Item...'}
                        value={selectedItem}
                    />
                </div>
            );
        }
    }
}
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {XPHComboBox} from './controls/DropDowns/XPHComboBox'
import {XPHDropDownList} from './controls/DropDowns/XPHDropDownList'
import {XPHNumericTextBox} from './controls/Inputs/XPHNumericTextBox'
import {XPHMaskedTextBox} from './controls/Inputs/XPHMaskedTextBox'

import '@progress/kendo-theme-default/dist/all.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      Categories:["yellow","green"],
      selectedItem:null,
      Amount:5,
      Phone:1234567890,
      Mask:'(999) 000-0000',
      phoneValid:false,
      phoneRegex:/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
    };
    this.selectedItemChange = this.selectedItemChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
  }
  
  selectedItemChange(value){
      this.setState({
          selectedItem:value
      });
  }

  onOpen(args){
    console.log(args);
  }

  onAmountChange(value){
    this.setState(prevState =>({
      Amount:value
    }));
  }

  onPhoneChange(value){
    this.setState(prevState =>({
      Phone:value
    }));
  }

  render() {
    return (
      <div>
          <label>Combo </label>
          <XPHComboBox data={this.state.Categories} selectedItem={this.state.selectedItem} onOpen={this.onOpen} selectedItemChange={this.selectedItemChange}/>
          <div style={{ margin: '10px' }}/>
          <label>Dropdown </label>
          <XPHDropDownList data={this.state.Categories} selectedItem={this.state.selectedItem} selectedItemChange={this.selectedItemChange}/>
          <div style={{ margin: '10px' }}/>
          <label>Numeric </label>
          <XPHNumericTextBox value={this.state.Amount} onChange={this.onAmountChange}/>
          <div style={{ margin: '10px' }}/>
          <label>Mask (Phone) </label>
          <XPHMaskedTextBox value={this.state.Phone} onChange={this.onPhoneChange} mask={this.state.Mask} regex={this.state.phoneRegex} />
      </div>
    );
  }
}

export default App;

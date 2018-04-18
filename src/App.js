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
    console.log(this.state.Phone);
  }
  

  render() {
    return (
      <div>
          <XPHComboBox data={this.state.Categories} selectedItem={this.state.selectedItem} onOpen={this.onOpen} selectedItemChange={this.selectedItemChange}/>
          <XPHDropDownList data={this.state.Categories} selectedItem={this.state.selectedItem} selectedItemChange={this.selectedItemChange}/>
          <XPHNumericTextBox value={this.state.Amount} onChange={this.onAmountChange}/>
          <XPHMaskedTextBox value={this.state.Phone} onChange={this.onPhoneChange} mask={this.state.Mask}/>
      </div>
    );
  }
}

export default App;

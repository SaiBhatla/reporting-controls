import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {XPHComboBox} from './controls/DropDowns/XPHComboBox'
import {XPHDropDownList} from './controls/DropDowns/XPHDropDownList'
import {XPHNumericTextBox} from './controls/Inputs/XPHNumericTextBox'
import {XPHMaskedTextBox} from './controls/Inputs/XPHMaskedTextBox'
import {XPHDatePicker} from './controls/Date/XPHDatePicker'
import {XPHSwitch} from './controls/Switch/XPHSwitch'
import {XPHTextBox} from './controls/Inputs/XPHTextBox'
import {XPHCheckbox} from './controls/Inputs/XPHCheckbox'
import {XPHLabel} from './controls/Label/XPHLabel'
import {getData} from './data/XPHGridData'
import {getBarChartSeries, getBarChartCategories} from './data/GetBarChartData'
import {getPieChartSeries, getPieChartSeriesDefaults} from './data/GetPieChartData'
import {XPHGrid} from './controls/Grid/XPHGrid'
import {XPHBarChart} from './controls/Charts/XPHBarChart'
import {XPHPieChart} from './controls/Charts/XPHPieChart'
import '@progress/kendo-theme-default/dist/all.css'

class App extends Component {

  constructor(props){
    super(props);
    let gridData = getData();
    let barChartSeriesData = getBarChartSeries();
    let barChartCategoriesData = getBarChartCategories();
    let pieChartSeriesData = getPieChartSeries();
    let pieChartSeriesDefaultsData = getPieChartSeriesDefaults();
    this.state = {
      Categories:["yellow","green"],
      selectedItem:null,
      Amount:5,
      Phone:1234567890,
      Mask:'(999) 000-0000',
      phoneValid:false,
      phoneRegex:/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/,
      selectedDate:new Date('1/10/2018'),
      dateFormat: 'MM/dd/yyyy',
      IsSwitchChecked: true,
      SwitchOnLabel:'In',
      SwitchOffLabel:'Out',
      InputValue:'',
      InputLabel:'Address',
      isChecked: true,
      labelText: 'abc',
      rows: gridData.rows,
      columns: gridData.columns,
      barChartSeries: barChartSeriesData,
      barChartCategories: barChartCategoriesData,
      pieChartSeries: pieChartSeriesData,
      pieChartSeriesDefaults: pieChartSeriesDefaultsData
    };
    this.selectedItemChange = this.selectedItemChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onCheckedChange = this.onCheckedChange.bind(this);
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

  onDateChange(value){
    this.setState(prevState =>({
      selectedDate:value
    }));
  }

  onSwitchChange(value){
    this.setState(prevState =>({
      IsSwitchChecked:value
    }));
  }

  onTextChange(value){
    this.setState(prevState =>({
      InputValue:value
    }));
  }

  onCheckedChange(value){
    this.setState(prevState =>({
      isChecked:value
    }));
  }

  render() {
    const rows = this.state.rows;
    const columns = this.state.columns;
    const series = this.state.barChartSeries;
    const categories = this.state.barChartCategories;
    const pieSeries = this.state.pieChartSeries;
    const pieSeriesDefaults = this.state.pieChartSeriesDefaults;
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
          <div style={{ margin: '10px' }}/>
          <label>DatePicker </label>
          <XPHDatePicker value={this.state.selectedDate} onChange={this.onDateChange} format={this.state.dateFormat} />
          <div style={{ margin: '10px' }}/>
          <label>Switch </label>
          <XPHSwitch checked={this.state.IsSwitchChecked} onChange={this.onSwitchChange} onLabel={this.state.SwitchOnLabel} offLabel={this.state.SwitchOffLabel} />
          <div style={{ margin: '10px' }}/>
          <label>TextBox </label>
          <XPHTextBox onChange={this.onTextChange} value={this.state.InputValue} label={this.state.InputLabel} />
          <div style={{ margin: '10px' }}/>
          <label>Checkbox </label>
          <XPHCheckbox checked = {this.state.isChecked} onChange={this.onCheckedChange} />
          <div style={{ margin: '10px' }}/>
          <label>Label </label>
          <XPHLabel labelText = {this.state.labelText} />
          <div style={{ margin: '10px' }}/>
          <label>Grid </label>
          <div>
            <XPHGrid Rows={rows} ColumnDefs={columns}/>
          </div>
          <div style={{ margin: '10px' }}/>
          <label>Bar Chart </label>
          <XPHBarChart series={series} categories={categories} />
          <div style={{ margin: '10px' }}/>
          <label>Pie Chart </label>
          <XPHPieChart series={pieSeries} seriesDefaults={pieSeriesDefaults} />
      </div>
    );
  }
}

export default App;

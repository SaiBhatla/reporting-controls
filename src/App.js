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
import {getEntityTypes,getFormSettings,saveFormSettings} from './data/FormData'
import { Button } from '@progress/kendo-buttons-react-wrapper';
import {getBarChartSeries, getBarChartCategories} from './data/GetBarChartData'
import {getPieChartSeries, getPieChartSeriesDefaults} from './data/GetPieChartData'
import {getLineChartSeries} from './data/GetLineChartData'
import {XPHGrid} from './controls/Grid/XPHGrid'
import {XPHBarChart} from './controls/Charts/XPHBarChart'
import {XPHPieChart} from './controls/Charts/XPHPieChart'
import {XPHLineChart} from './controls/Charts/XPHLineChart'
import {XPHTabStrip} from './controls/TabStrip/XPHTabStrip'
import '@progress/kendo-theme-default/dist/all.css'

class App extends Component {

  constructor(props){
    super(props);
    let gridData = getData();
    let barChartSeriesData = getBarChartSeries();
    let barChartCategoriesData = getBarChartCategories();
    let pieChartSeriesData = getPieChartSeries();
    let pieChartSeriesDefaultsData = getPieChartSeriesDefaults();
    let lineChartSeriesData = getLineChartSeries();
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
      EntityTypes:[],
      selectedEntityType:null,
      WorkflowDescription:'',
      WorkflowStartDate:null,
      WorkflowId:0,
      barChartSeries: barChartSeriesData,
      barChartCategories: barChartCategoriesData,
      pieChartSeries: pieChartSeriesData,
      pieChartSeriesDefaults: pieChartSeriesDefaultsData,
      lineChartSeries: lineChartSeriesData,
      tabStripData: []
    };
    this.selectedItemChange = this.selectedItemChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onWorkflowDateChange = this.onWorkflowDateChange.bind(this);
    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onWorkflowDescriptionChange = this.onWorkflowDescriptionChange.bind(this);
    this.onCheckedChange = this.onCheckedChange.bind(this);
    this.selectedEntityTypeChange = this.selectedEntityTypeChange.bind(this);
    this.saveFormData = this.saveFormData.bind(this);
  }

  async componentDidMount(){
    const data = await this.getEntityTypes();
    this.setState({
      EntityTypes: data
    },()=>{
      this.getFormData();
    });

  }

  async getEntityTypes() {
    let data = await getEntityTypes();
    return data;
  }

  selectedEntityTypeChange(value){
      this.setState({
        selectedEntityType:value
    });
    this.onLinkClick = this.onLinkClick.bind(this);
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

  onWorkflowDateChange(value){
    this.setState(prevState =>({
      WorkflowStartDate:value
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

  onWorkflowDescriptionChange(value){
    this.setState(prevState =>({
      WorkflowDescription:value
    }));
  }

  onCheckedChange(value){
    this.setState(prevState =>({
      isChecked:value
    }));
  }

  onLinkClick(){
    let item = { Name: "Tab", Content: "Tab: content" }
    this.setState(prevState => ({
      tabStripData: [...prevState.tabStripData, item]
    }))
  }

  async saveFormData(){
    console.log(this.state.selectedEntityType);
    await saveFormSettings(this.state.selectedEntityType,this.state.WorkflowId,this.state.WorkflowDescription,this.state.WorkflowStartDate.toString());
  }

  async getFormData(){
    const data = await getFormSettings();
    this.setState(prevState =>({
      selectedEntityType:data.EntityTypeId,
      WorkflowDescription:data.Workflow.Description,
      WorkflowId:data.Workflow.Id,
      WorkflowStartDate:new Date(data.WorkflowStartDate)
    }));
    console.log(data);
  }

  render() {
    const rows = this.state.rows;
    const columns = this.state.columns;
    const series = this.state.barChartSeries;
    const categories = this.state.barChartCategories;
    const pieSeries = this.state.pieChartSeries;
    const pieSeriesDefaults = this.state.pieChartSeriesDefaults;
    const lineSeries = this.state.lineChartSeries;
    return (
      <div>
          <a title = "Menu Item" onClick={this.onLinkClick}>Menu1</a>
          <div style={{ margin: '10px' }}/>
          <label>TabStrip </label>
          <XPHTabStrip data={this.state.tabStripData}/>
          <div style={{ margin: '10px' }}/>
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
          <div>
            <label> Form Data </label>
            <div style={{ margin: '10px' }}/>
            <label> Entity Type </label>
            <div style={{ margin: '10px',display: 'inline-block' }}/>
            <XPHComboBox data={this.state.EntityTypes} selectedItem={this.state.selectedEntityType} selectedItemChange={this.selectedEntityTypeChange} textField={"Description"} valueField={"Id"}/>
            <div style={{ margin: '10px' }}/>
            <label> Workflow Description </label>
            <div style={{ margin: '10px',display: 'inline-block' }}/>
            <XPHTextBox value={this.state.WorkflowDescription} onChange={this.onWorkflowDescriptionChange}/>
            <div style={{ margin: '10px' }}/>
            <label> Workflow Start Date </label>
            <div style={{ margin: '10px',display: 'inline-block' }}/>
            <XPHDatePicker value={this.state.WorkflowStartDate} onChange={this.onWorkflowDateChange} format={this.state.dateFormat} />
            <div style={{ margin: '10px' }}/>
            <Button style={{ margin: "5px 0px 0px 0px" }} click={this.saveFormData} >Save</Button>
          </div>
          <div style={{ margin: '10px' }}/>
          <label>Bar Chart </label>
          <XPHBarChart series={series} categories={categories} />
          <div style={{ margin: '10px' }}/>
          <label>Pie Chart </label>
          <XPHPieChart series={pieSeries} seriesDefaults={pieSeriesDefaults} />
          <div style={{ margin: '10px' }}/>
          <label>Line Chart </label>
          <XPHLineChart series={lineSeries} />
      </div>
    );
  }
}

export default App;

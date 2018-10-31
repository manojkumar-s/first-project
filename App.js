import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Numbers from './components/Numbers'
import DatePicker from 'react-date-picker'
import DatePicker2 from 'react-datepicker'
// import BootstrapDatePicker from 'react-bootstrap-date-picker'

  


class App extends Component {
  
  render() {
    return (
      <div>
        <Clock />
        <Numbers />
        <DatePicker />
        <DatePicker2 />
        {/* <BootstrapDatePicker /> */}
      </div>
    );
  }
}

export default App;

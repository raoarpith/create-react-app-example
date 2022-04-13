import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import TextField from "@material-ui/core/TextField";
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
    const [name, setName] = useState("");

    const getData = () => {
      axios.get('http://localhost:8080/getdata/covid19coronafakevaccinationhoax').then(res => {
        console.log(res);
      }).catch(console.log("hello"));
    }

  return (
    <div style={{fontFamily: "Arial, Helvetica, sans-serif"}}>
      <h1 style={{marginLeft: "10%"}}><b>COVID-19 Misinformation Detection From Twitter Dataset</b></h1>
    <div
      style={{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "2.5%",
        marginBottom: "30%",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      
      <div className="container"><div className="typed-out">Enter Search queries.....</div></div>
      <SearchBar fullWidth
        value={name}
        style={{marginBottom :"5%"}}
        label="Enter your search queries"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={getData}></button>
    </div>
    </div>
  );
}

export default App;

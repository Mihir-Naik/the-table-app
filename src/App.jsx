import React, { Component } from 'react';
import './App.css';

class Table extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

  addRowClickHandler(evt){
    console.log("Add button clicked..")
    console.log(this.refs.Make.value)
  }

  deleteRowClickHandler(){
    console.log("Delete butotn clicked..")
  }

  render(){
    return (
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            {this.props.tableData.headers.map(headerName => 
              <th key={headerName}>{headerName}</th>
            )}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.props.tableData.headers.map(headerName => 
              <td>
                <input ref={headerName} placeholder={headerName}/>
              </td>
            )}
            <td><button className="button-success pure-button" onClick={this.addRowClickHandler.bind(this)}>Add</button></td>
          </tr>
          {this.props.tableData.data.map(dataRow => { 
            return (
              <tr>
                {dataRow.map(d => <td>{d}</td>)}
                <td><button className="button-error pure-button" onClick={this.deleteRowClickHandler.bind(this)}>Delete</button></td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    )
  }
}

class App extends Component {
  render() {
    var initialTableData = {
      headers: ["Make", "Model", "Year"],
      data: [['scion', 'box', 2010],
            ['honda', 'Accord', 2012],
            ['Chevrolet', 'Camaro', 1980],
            ['pontiac', 'firebird', 2014]
          ]
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Table App - REACT</h1>
        </header>
          <Table tableData={initialTableData}/>
      </div>
    );
  }
}

export default App;

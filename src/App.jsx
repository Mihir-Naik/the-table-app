import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var initialTableData = {
      headers: ["Make", "Model", "Year"],
      data: [['scion', 'box', 2010],
            ['honda', 'accord', 2012],
            ['chevrolet', 'camaro', 1980],
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

class Table extends Component {
  constructor(props){
    super(props)
    this.state = props
  }

  addRowClickHandler(evt){
    console.log("Add button clicked..")
    let values = [this.refs.Make.value, this.refs.Model.value, this.refs.Year.value]
    this.setState({
      tableData: {...this.state.tableData, data: [...this.state.tableData.data, values]}
    })
  }

  deleteRowClickHandler(row){
    console.log("Delete button clicked..and deleting", row )
    let updatedData = this.state.tableData.data.filter((el) =>{
      return (el[0] !== row[0] && el[1] !== row[1] && el[2] !== row[2])
    })
    this.setState({
      tableData: {...this.state.tableData, data: updatedData}
    })
  }

  renderHeaders() {
    return this.state.tableData.headers.map(headerName => 
      <td>
        <input 
          ref={headerName} 
          placeholder={headerName}
        />
      </td>
    )
  }

  render(){
    return (
      <table className="pure-table pure-table-bordered">
        <thead>
          <tr>
            {this.state.tableData.headers.map(headerName => 
              <th key={headerName}>{headerName}</th>
            )}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {this.renderHeaders()}
            <td>
              <button 
                className="button-success pure-button" 
                onClick={this.addRowClickHandler.bind(this)}
              >
                Add
              </button>
            </td>
          </tr>
          {this.state.tableData.data.map(dataRow => { 
            return (
              <tr>
                {dataRow.map(d => <td>{d}</td>)}
                <td>
                  <button 
                    className="button-error pure-button" 
                    onClick= {this.deleteRowClickHandler.bind(this, dataRow)}
                    >Delete
                  </button>
                </td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    )
  }
}

export default App;

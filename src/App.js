import React from 'react';
import logo from './lcologo.png';
import './App.css';

// Functional Component
/* 
function App() {
  return (
    <div>
      <h1>React Crash Cource</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Logo" />
        <p className="App">This is functional component</p>
        <p>Learn React Crash Cource</p>
      </header>
    </div>
  );
}*/
// Class Based Component
class App extends React.Component {
  constructor(props){
   super(props);
   this.state = {
     newItem: "",
     list: []
   }
  }

  /**
   * 
   * TODO: Add the task in State 
   * @param id  
   */
  addItem(todoValue){
   if(todoValue !==""){
    const newItem = {
      id: Date.now(),
      value: todoValue,
      status: false
    }
    const list = [...this.state.list];
    list.push(newItem);
    // this.state.list = [...list];
    this.setState({
      list,
      newItem: ""
    });
   }
  }

  /**
   * 
   * TODO: Delete the given id task from status 
   * @param id  
   */
  deleteItem(id){
    const list = [...this.state.list];
    const updateList = list.filter(item=> item.id !== id );
    this.setState({list:updateList})
  }

  /**
   * 
   * TODO: Modify the status of given input with current value in state
   * @param input  
   */
  updateInput(input){
    this.setState({newItem:input});
  }

  /**
   * 
   * TODO: Modify the task status of given task id from state
   * @param id id 
   */
  setTaskStatus(id){
    const list = [...this.state.list];    
    const updateList = list.map(item=> { 
      if(item.id === id){
        item.status = !item.status // setting status of item true/false
      }
      return item;
    });

    this.setState({list:updateList})
  }

  render(){
    return (
      <div>
        <img src={logo} alt="Logo" width="100" height="100" className="logo"/>
        <h1 className="app-title">First React ToDo App</h1>
        <div className="container">
          Add an item....
          <br/>
          <input 
           type="text" 
           name="" 
           className="input-text"
           placeholder="Write a Todo"
           required
           value={this.state.newItem}
           onChange={e=> this.updateInput(e.target.value)}
          />
          <button 
           className="add-btn"
           onClick={()=>this.addItem(this.state.newItem)}
           disabled={!this.state.newItem.length}
           >Add Todo</button>
          <div className="list">
           <ul>
             {this.state.list.map(item => { 
               return (
                 <li key={item.id}>             
                   <input 
                    type="checkbox" 
                    name="status" 
                    checked={item.status ? true : false}
                    onChange={()=> {this.setTaskStatus(item.id)} }
                   />
                   {item.value}
                   <button
                    className="btn-delete"
                    onClick={()=> this.deleteItem(item.id)}
                   >Delete</button>
                 </li>
               )
             })}             
           </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
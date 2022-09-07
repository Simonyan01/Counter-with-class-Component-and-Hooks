import React, { Component } from "react";
import "./App.css"

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
      editing: false,
      currentId: "",
      currendValue: ""
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };
  onAddTask = (e) => {
    e.preventDefault();

    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };
  //Button jnjelu hamar
  delete_btn = (itemId) => {
    this.setState({
      todos: [...this.state.todos].filter((id) => id.id !== itemId),
    });
  };

  //Button xmbagrelu anelu hamar
  onToggleEdit = (todo) => {
    this.setState({ editing: true })
    this.setState({ currentId: todo.id })
    this.setState({ currendValue: todo.name })
  }

  onEditInputChange = (e) => {
    this.setState({ currendValue: e.target.value })
  }


  onSubmitEditTodo = (e) => {
    e.preventDefault()
    this.onEditTodo(this.state.currentId, this.state.currendValue)
    this.setState({ editing: false })
  }

  onEditTodo = (id, newValue) => {
    // eslint-disable-next-line array-callback-return
    this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.name = newValue;
      }
    });
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">
        {todo.name}

        <button onClick={() => this.onToggleEdit(todo)}>Edit</button>
        <button onClick={() => this.delete_btn(todo.id)}>Remove</button>
      </li>
    ));

    return (

      <>
        <div className="App">
          {this.state.editing === false ?
            (<form onSubmit={this.onAddTask}>
              <input
                placeholder="Type your task"
                value={this.state.value}
                onChange={this.onChange}
              />
              <button onClick={this.onAddTask}>Add Item</button>
            </form>)
            :
            (<form onSubmit={this.onSubmitEditTodo}>
              <input placeholder="Edit your task" value={this.state.currendValue}
                name={this.state.currendValue}
                onChange={this.onEditInputChange}
              />
              <button onClick={this.onSubmitEditTodo} >Update Item</button>
            </form>)}

          <ul className='todo_wrapper'>
            {mylist}
          </ul>
        </div>
      </>
    );
  }

}

export default App;
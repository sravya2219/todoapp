
// class App extends Component{
//     constructor(){
//         super();
//         this.state={todoInput:"", todos:[],isEdit:false,updateIndex:null}
//     }
//     handleInput= (e)=>{
//         this.setState({todoInput:e.target.value})

//     }
//     handleAddTodo= ()=>{
//         const newtodo=[...this.state.todos,this.state.todoInput]
//           this.setState({todos:newtodo,todoInput:""})
//     }
//     handleDelete =(index)=>{
//       const todosdelete=this.state.todos.filter((ele,i)=>  i !==index)
//       this.setState({todos:todosdelete})
//     }
//     handleEdit = (index)=>{
//         const findTodoById=this.state.todos.find((ele,i)=> i ==index)
//         this.setState({todoInput:findTodoById,isEdit:true,updateIndex:index})

//     }
//     handleUpdate = ()=>{
//         this.state.todos.splice(this.state.updateIndex,1,this.state.todoInput)
//         this.setState({todoInput:"",todos:this.state.todos,isEdit:false,updateIndex:null})
//     }
//  render(){
   
//     return (
//     <div className="main">
//       <h1>Todo Application</h1>
//         <div className="add">
//         <input type="text" onChange={(e)=>this.handleInput(e)} placeholder="Enter todo Tasks" value={this.state.todoInput}/>  
//         {this.state.isEdit === true ? <button onClick={()=>this.handleUpdate()}>Update</button>: <button onClick={()=>this.handleAddTodo()}>Add</button>} 
        

//     </div>
//     <div className="second">
//     {this.state.todos.map((ele,index)=> <div key={index}> 
//         <p>{ele}</p>
//         <button onClick={()=>this.handleEdit(index)}>Edit</button>
//         <button onClick={()=>this.handleDelete(index)}>Delete</button>
//     </div>)}
//     </div>
//     </div>
//     );
//  }
// }
// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;

    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setTodoInput(todos[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = todoInput;

    setTodos(updatedTodos);
    setTodoInput("");
    setIsEdit(false);
    setEditIndex(null);
  };

  return (
    <div className="main">
      <h1>Todo Application</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />

      {isEdit ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAddTodo}>Add</button>
      )}

      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo}</p>
          <button onClick={() => handleEdit(index)}>Edit</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;

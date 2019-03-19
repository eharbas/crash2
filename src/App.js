import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent"
import todosData from "./todosData"


import TodoItem from "./TodoItem"


class App extends Component {

  
  constructor()
  {
    super()
    this.state={
      answer:"Yes",
     name:"Sally",
     age:13,
    isLoggedIn:true,
    todos:todosData,
    }

    this.handleChange=this.handleChange.bind(this)
  }

  handleChange(id)
  {
this.setState(prevState=>{

const updatedTodos=prevState.todos.map(todo=>{

  if(todo.id===id)
  {
todo.completed=!todo.completed
  }
  return todo

})

return {
  todos:updatedTodos
}


})  }

  render() {

    let worDisplay
  
    if(this.state.isLoggedIn)
    {
      worDisplay="in"
    }
    else{
      worDisplay="out"
    }

    const todoItems = todosData.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
     const date =new Date();
    const firstName = "BOBO";
    const lastName="zirolo";
   // const date= new Date();
    const hours = date.getHours();
    let timeOfDay

    if(hours<12)
    {

     timeOfDay="morning"
     
    }else if (hours >=12 && hours<17)
    {
      timeOfDay="afternoon"
    }else{

      timeOfDay="night"
    
    }
    return <div className="App">


      <div className="todo-list">{todoItems}</div>

    <div>
  <h1>You are currently loged {worDisplay}</h1>  
    </div>

<h1>-------------------------------------------------------------------</h1>
     <h1>Is state important to know? {this.state.answer}</h1> 
   <h1>------------------------------------------------------------</h1>
     
     <h1>{this.state.name}</h1>
       <h3>{this.state.age}</h3>


       <h1>------------------------------------------------------------</h1>
        
     <h1>---------------------------------------------------------------</h1>
        <h1 style={{ color: "#FF8C00 ", backgroundColor: "#FF2D00" }}>
          Good {timeOfDay}
        </h1>
<h1>----------------------------------------------------------------------</h1>
        <h1> Vrijeme je sad {date.getHours() % 12} sati</h1>
        <h1>Hello {`${firstName} ${lastName}`}!</h1>
        <Header />
        <MainContent />
        <Footer />

        {/* <h1>{this.props.whatever}</h1>*/}
      </div>;


    
  }
}

export default App;

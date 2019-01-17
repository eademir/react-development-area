import React, { Component } from 'react';
import './App.css';
import getTodoAction from "./actions/getTodoAction";
import getUserAction from "./actions/getUserAction";
import Footer from './components/layouts/footer'
import Btn from './components/layouts/button'

export default class App extends Component {
  constructor(props)  {
    super(props);
    this.pushName = this.pushName.bind(this);
    this.state = {
      isLoading: true,
      hasError: false,
      todo: null,
      user: null
    }
  }
  componentWillMount() {
    getTodoAction().then((res) => {
      getUserAction(res.data).then((usr) => {
        this.setState({
          todo: res.data,
          user: usr.data,
          isLoading: false
        })
      }).catch((err) => {
        this.setState({
          hasError: true
        })
      })
    }).catch((err) => {
      this.setState({
        hasError: true
      })
    });
  }
  pushName = () => {
    console.log('deneme'/*, this*/)
  };
  render() {
    if(this.state.hasError){
      return(
          <div className='App'>
            Hata
          </div>
      )
    }
    else if(this.state.isLoading){
      return(
          <div className='App'>
            Yükleniyor
          </div>
      )
    }
    const {user} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <p>ID: {this.state.todo.id}</p>
            <p>Title: {this.state.todo.title}</p>
            <p>Completed: {this.state.todo.completed ? "yes" : "no"}</p>
            <pre>{user.name !== undefined && user.name !== null ? user.name : "cannot find name"}</pre>
            <Btn btnName='Push' onC={this.pushName}/>
          </header>
          <Footer/>

        </div>
    );
  }
}

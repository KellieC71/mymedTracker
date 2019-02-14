// import axios from "axios";
// <div className="mymedtracker">
//   <medlist addItem={this.addItem} />

import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'

class App extends Component {
  constructor() {
    super()
    this.sate = {
      items: [],
      currentItem: { text: '', key: '' },
    }
  }
  handleInput = e => {
    console.log('Hello Input')
  }
  addItem = () => {
    console.log('Hello Add Item')
  }
  render() {
    return (
      <div className="App">
        <TodoList addItem={this.addItem} />
      </div>
    )
  }
}
{/* /* </div>
export default {
  // Gets all books
  getUser: function () {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUserId: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  saveUser: function (userData) {
    console.log("in saveUser axios");
    console.log(userData);
    return axios.post("/api/user", userData);
  // }, */

//   getmedList: function (id) {
//     return axios.get("/api/medlist/" + id);
//   },

// }; */}

import React, { Component } from 'react';
import './App.css';
import MedsContainer from './components/MedsContainer';

import SignUpContainer from './components/SignUpContainer';
import SignInContainer from './components/SignInContainer';
import UserContainer from './components/UserContainer';
import ReactDOM from 'react-dom';
import API from "./utils/API";

import Modal from 'react-responsive-modal';
import "./Login.css";


class App extends Component {
  constructor() {
    super();

    this.state = {
      open1: false,
      open2: false,
      users: [],
      currentUser: "",
      email: "",
      password: "",
      usershow: false
    }
  }
  onOpenModal_SignUp = () => {
    this.loadUsers();
  };

  onCloseModal_SignUp = () => {
    this.loadUsers();
    this.setState({ open1: false });
  };

  onOpenModal_SignIn = () => {
    this.loadUsers();
    this.setState({ open2: true });
  };

  onOpenModal_SignIn = () => {
    this.loadUsers();
    this.setState({ open2: true });
  };

  onCloseModal_SignIn = () => {
    this.loadUsers();
    this.setState({ open2: false });
  };

  componentDidMount() {
    this.loadUsers();
    this.setState({ initialized: true });
  };

  loadUsers = () => {
    API.getUser()
      .then(res =>
        this.setState({ users: res.data })
      )
      .catch(err => console.log(err));
  };


  logOffonClick = () => {
    this.toggleUsernameShow();
    this.setState({ email: "" });
  }

  render() {
    const { open1 } = this.state;
    const { open2 } = this.state;
    return (
      <div className="App">
        <h1>Med Tracker</h1>
        <MedsContainer></MedsContainer>
        {this.state.usershow && <UserLogged email={this.state.email} />}
        {!this.state.usershow && <button className="login_modal_button" onClick={this.onOpenModal_SignUp}>Sign Up</button>}
        {!this.state.usershow && <button className="login_modal_button" onClick={this.onOpenModal_SignIn}>Sign In</button>}
        {this.state.usershow && <button className="login_modal_button" onClick={this.logOffonClick}>Log off</button>}
        <Modal open={open1} onClose={this.onCloseModal_SignUp} little>
          <h2>Sign Up</h2>
          <SignUpContainer onClose={this.onCloseModal_SignUp} LoadUsers={this.LoadUsers} users={this.state.users} />
        </Modal>
        <Modal open={open2} onClose={this.onCloseModal_SignIn} little>
          <h2>Sign In</h2>
          <SignInContainer email={this.state.email} handleChange={this.handleChange} validateForm={this.validateForm} users={this.state.users} onClose={this.onCloseModal_SignIn} password={this.state.password} LoadUsers={this.LoadUsers} toggleUsernameShow={this.toggleUsernameShow} />
        </Modal>
      </div>
    );
  }
}

class UserLogged extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserContainer email={this.props.email}></UserContainer>
      </div>

      <MedsContainer></MedsContainer>
    { this.state.medListshow && <medListLogged Medication={this.state.email} /> }
    { !this.state.medlistshow && <button className="list_modal_button" onClick={this.onOpenModal_medList}>Medication List</button> }
    { !this.state.Quantityshow && <button className="Quantity_modal_button" onClick={this.onOpenModal_Quantity}>Quantity</button> }
    { this.state.timeshow && <button className="time_modal_button" onClick={this.logOffonClick}>TimeTaken</button> }
    <Modal open={open1} onClose={this.onCloseModal_SignUp} little>
      <h2>Medication List</h2>
      <MedicationContainer onClose={this.listModal_medList} LoadMeds={this.LoadUsers} users={this.state.users} />
    </Modal>
      <Modal open={open2} onClose={this.onCloseModal_SignIn} little>
        <h2>Save</h2>
        <medsContainer email={this.state.email} handleChange={this.handleChange} validateForm={this.validateForm} users={this.state.users} onClose={this.onCloseModal_SignIn} password={this.state.password} LoadUsers={this.LoadUsers} toggleUsernameShow={this.toggleUsernameShow} />
      </Modal>





class UserLogged extends Component {
      constructor(props) {
        super(props);
      }
      render() {

        return (
          <div className="mymedtracker" />

          <medsList />
              
          </div >
        )
      }
    }

    export default App;


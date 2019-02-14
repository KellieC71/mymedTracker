// module.exports = {
//   User: require("./user"),
// //   Meds: require("./Meds")
// import React, { useState } from 'react';
// const App = () => {
//   const [todos, setTodos] = useState([]);
//   return

import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import MedForm from './MedForm';
import MedList from './MedList';
import useTodoState from './useTodoState';
import './style.css';

const App = () => {
  const { addMeds, deleteMeds } = useMedState([]);

  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Meds
      </Typography>

      <MedForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addmedList(trimmedText);
          }
        }}
      />

      <MedList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootEleme

import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import from './medicationlist.html';
import medList from './medList';
import useMedState from './useTodoState';
import './styles.css';

const App = () => {
    const { todos, addTodo, deleteTodo } = useTodoState([]);

    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todos
      </Typography>

            <MedForm
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) {
                        addTodo(trimmedText);
                    }
                }}
            />

            <medList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
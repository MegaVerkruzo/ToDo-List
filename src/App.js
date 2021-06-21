import React, {useState} from "react";
import "./App.css";
import Task from "./component/Task/Task";
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";


function App() {
    const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out']);
    const [input, setInput] = useState('');

    const todosArray = todos.map(el => <Task todo={el}/>)

    const addTask = event => {
        event.preventDefault();
        setTodos([...todos, input]);
        setInput('');
    }

    return (
        <div className="App">
            <h1>Hello visiter!!!</h1>

            <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input onChange={event => setInput(event.target.value)} value={input}/>
            </FormControl>

            <Button disabled={!input} type="submit" onClick={addTask} variant="contained" color="primary">
                Add To-Do
            </Button>
            <ul>
                {todosArray}
            </ul>
        </div>
    );
}

export default App;

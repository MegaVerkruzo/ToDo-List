import React, {useState, useEffect} from "react";
import "./App.css";
import Task from "./component/Task/Task";
import {Button, FormControl, Input, InputLabel, List} from "@material-ui/core";
import db from './firebase'
import firebase from 'firebase';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        db.collection('todos')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().task})))
            })
    }, []);

    const todosArray = todos.map(el => <Task todo={el}/>)

    const addTask = event => {
        event.preventDefault();

        db.collection('todos').add({
            task: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

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

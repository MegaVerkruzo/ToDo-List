import React from 'react';
import {Button, List, ListItem, ListItemText} from "@material-ui/core";
import classes from './Task.module.css';
import db from './../../firebase';
import firebase from "firebase";

const Task = (props) => {

    const deleteTask = () => {
        db.collection('todos').doc(props.todo.id).delete().then(() => {console.log('document deleted')});
    }

    return (
        <ListItem className={classes.task__todos}>
            <Button variant="contained" color="secondary" onClick={ deleteTask }>DELETE ME</Button>
            <ListItemText className={classes.task__todos_text} primary={props.todo.todo} secondary="Deadline"/>
        </ListItem>
    );
}

export default Task;
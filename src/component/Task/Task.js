import React from 'react';
import {Button, List, ListItem, ListItemText} from "@material-ui/core";
import classes from './Task.module.css';
import db from './../../index';
import firebase from "firebase";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Task = (props) => {

    const deleteTask = () => {
        db.collection('todos').doc(props.todo.id).delete().then(() => {console.log('document deleted')});
    }

    return (
        <ListItem className={classes.task__todos}>
            <DeleteForeverIcon style={{cursor: 'pointer'}}onClick={ deleteTask } action />
            <ListItemText className={classes.task__todos_text} primary={props.todo.todo}/>
        </ListItem>
    );
}

export default Task;
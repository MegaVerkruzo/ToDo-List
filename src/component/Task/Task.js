import React from 'react';
import {List, ListItem, ListItemText} from "@material-ui/core";
import classes from './Task.module.css';

const Task = (props) => {
    return (
        <ListItem className={classes.task__todos}>
            <ListItemText primary={props.text} secondary="Deadline"/>
        </ListItem>
    );
}

export default Task;
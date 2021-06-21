import React from 'react';

const Task = (props) => {
    return (
        <li>
            {props.todo}
        </li>
    );
}

export default Task;
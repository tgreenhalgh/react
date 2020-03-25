/** @format */
import React from 'react';
import Task from './Task';

const ListTasks = props => props.tasks.map((t, i) => <Task task={t} key={i} />);

export default ListTasks;

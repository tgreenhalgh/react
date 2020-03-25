/** @format */
import React, { Component } from 'react';
import ListTasks from './ListTasks';
import axios from 'axios';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      category: [],
      goals: [],
    };
  }

  async componentDidMount() {
    const taskURI = 'http://localhost:5000/a/';
    const categoryURI = 'http://localhost:5000/b/';
    const goalURI = 'http://localhost:5000/c/';
    const getTasks = axios.get(taskURI);
    const getCategory = axios.get(categoryURI);
    const getGoals = axios.get(goalURI);

    try {
      const res = await getTasks;
      this.setState({ tasks: res.data });
    } catch (e) {
      console.log('ERR fetching tasks', e);
    }
    try {
      const res = await getCategory;
      this.setState({ category: res.data });
    } catch (e) {
      console.log('ERR fetching categories', e);
    }
    try {
      const res = await getGoals;
      this.setState({ goals: res.data });
    } catch (e) {
      console.log('ERR fetching goals', e);
    }
  }

  render() {
    const { tasks, category, goals } = this.state;
    return (
      <div>
        Hi
        <br />
        {this.state.tasks ? <ListTasks tasks={tasks} /> : 'waiting'}
        <br />
        {category}
        <br />
        {goals}
      </div>
    );
  }
}

export default Tasks;

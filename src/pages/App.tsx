import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Stopwatch from '../components/Stopwatch';
import { ITasks } from '../types/task';
const style = require('./App.module.scss')

function App() {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [selected, setSelected] = useState<ITasks>()

  const selectTask = (selectedTask: ITasks) => {
    setSelected(selectedTask)
    setTasks(oldTasks => oldTasks.map( task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false,


    })))
  }

  const completeTask = () => {
    if (selected) {
      setTasks(oldTasks => oldTasks.map(task => {
        if (task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks}/>
      <List tasks={tasks}
        selectTask={selectTask} />
      <Stopwatch selected={selected} completeTask={completeTask}/>
    </div>
  );
}

export default App;

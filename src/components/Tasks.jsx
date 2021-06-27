import PropTypes from 'prop-types';
import { useState } from 'react';

const Task = props => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appoinment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
  ]);

  return (
    <>
      {tasks.map(task => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

Task.propTypes = {};

export default Task;

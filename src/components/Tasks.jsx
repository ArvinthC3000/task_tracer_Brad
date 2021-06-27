import PropTypes from 'prop-types';

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

Task.propTypes = {
  tasks: PropTypes.object.isRequired,
};

export default Task;

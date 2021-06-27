import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Tasks;

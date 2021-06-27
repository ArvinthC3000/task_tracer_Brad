import PropTypes from 'prop-types';

const Task = ({ task }) => {
  return (
    <div className='task'>
      <h3>My Task</h3>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
};

export default Task;

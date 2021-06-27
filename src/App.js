import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appoinment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
  ]);

  const deleteTask = id => {
    console.log('delete', id);
  };

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;

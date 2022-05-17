import { useState } from 'react'
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from './AddTask';



function App() {

  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 't1',
        text: 'Doctor Appointment',
        date: '20-feb-2022 5:00 pm',
        reminder: true,
    },
    {
         id: 't2',
         text: 'Food Shopping',
         date: '20-feb-2022 7:00 pm',
         reminder: false,
     },
     {
      id: 't3',
      text: 'Trip',
      date: '21-feb-2022 6:00 am',
      reminder: true,
    }
    ])

    //Open/Close AddTask Form
    const openForm = () => {
      setShowAddForm(!showAddForm)
    }

    //Add Tasks
    const onAddTask = (task) => {
      const id = Math.random();  //Adding id to each new task
      const newTask = {...task, id}  // spread the rest key value pairs that recieved from AddTask.js + the created id
      setTasks([...tasks, newTask])  // adding the new task to the old tasks
    }


    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) =>  task.id === id ? {...task, reminder: !task.reminder} : task ))
    }

  return (
    <div className="container">
      <Header onOpenForm={openForm} showAddForm={showAddForm} />
      { showAddForm && <AddTask onAddTask={onAddTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
       : 'No Tasks to Show'}
    </div>
  );
}

export default App;

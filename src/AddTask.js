import { useState } from "react";

const AddTask = ({ onAddTask }) => {

   const [text, setText] = useState('');
   const [date, setDate] = useState('');
   const [reminder, setReminder] = useState(false);

   const handleTaskChange = (event) => {
       setText(event.target.value)
   }

   const handleDateChange = (event) => {
        setDate(event.target.value)
   }

   const handleReminderChange = (event) => {
        setReminder(event.target.checked)
    }

    const onSubmit = (event) => {   // Submitting Adding Task
        event.preventDefault();
        if (!text) {
            alert('Please Enter a Task')
            return
        };

        onAddTask({text, date, reminder});    //send state that we already change by onChange

        setText('')   //Reset Form once submit adding a task
        setDate('')
        setReminder(false)
    }


    return (
        <form className="add-form" onSubmit={onSubmit}>

            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={handleTaskChange}/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Add Date" value={date} onChange={handleDateChange}/>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder} onChange={handleReminderChange}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask;
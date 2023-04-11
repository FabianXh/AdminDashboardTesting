import "./todoList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import Popup from "../../components/popup/popup";



const TodoList = () => {

    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(message) // from elements property
        setReminders([...reminders, {
            id: reminders.length + 1,
            text: message,
        }])
      }

    const handleDelete = (props) => {
        const newReminders = reminders.filter((text) => text !== props);
        setReminders(newReminders);
    }

    const [buttonPopup, setButtonPopup] = useState(false);

    const [reminders, setReminders] = useState([
        { id: 1 , text: 'Take the dog out for a walk'},
        { id: 2 , text: 'Create a list of necessary objects for officework'},
        { id: 3 , text: 'Check up on colleagues and workers'},
        { id: 4 , text: 'Finish the project before the 19th'},
    ])

    return(

        <div className="todolist">
            <Sidebar />
            <div className="todolistContainer">
                <Navbar />
                <h1 className="title">Reminders</h1>
                <ul>
                    {reminders.map(reminders => {
                        return (
                            <li key={reminders.id + 1}>
                                <div className="container">
                                    {reminders.text} 
                                    <button onClick={() => handleDelete(reminders)}>Delete</button>
                                </div>      
                            </li>
                        )
                    })}
                </ul>
                <button className="addButton" onClick={() => setButtonPopup(true)}>Add a new reminder</button>
            </div>

            <Popup className="popup" trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h1>Add a new reminder</h1>
                <div className="inputWrapper">
                    <form className="submitForm" onSubmit={handleSubmit}>
                        <input className="inputField"
                            type="text"
                            id="message"
                            name="message"
                            onChange={event => {setMessage(event.target.value)}}
                            value={message} 
                            placeholder="Input text here..."/>
                        <button className="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            </Popup>
        </div>
    )
}

export default TodoList;
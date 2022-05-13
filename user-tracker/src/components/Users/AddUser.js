
import Card from "../UI/Card"
import Button from "../UI/Button"
import styles from './AddUser.module.css'
import { useState } from "react";
import Modal from "../UI/Modal";

function AddUser(props) {

    const [userName, setUserName] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState({error: false, title: '', message: ''})
    const addUserHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || age.trim().length === 0) {
            setError({error:true, title: "Invalid input", message: "Please give a name and age!"})
            return 
        }
        if (parseInt(age) < 1) {
            setError({error:true, title: "Invalid age", message: "Age must be greater than 0!"})
            return
        }
        props.onAddUser({name: userName, age: age, key: Math.random().toString()})
        setUserName('')
        setAge('')

            
    }

    const userNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }

    const onOkayHandler = event => setError({error:false, title: '', message: ''})

    return (
        <div>
        {error.error && <Modal title={error.title} message={error.message} onOkay={onOkayHandler}/>}
        <Card className={styles.input}><form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={userNameChangeHandler} value={userName}/>
            <label htmlFor="age">Age</label>
            <input type="number" name="age" id="age" onChange={ageChangeHandler} value={age}/>
            <Button type="submit">Add User</Button>
        </form></Card>
        </div>
    )
}

export default AddUser
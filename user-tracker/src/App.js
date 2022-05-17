import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
    const [users, setUsers] = useState([])

    const addUserHandler = (user) => {
        setUsers((prevUsers) => {
            return setUsers([user, ...prevUsers])
        })
    }

    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={users} />
        </>
    )
}

export default App

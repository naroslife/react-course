import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './AddUser.module.css'
import { useState, useRef } from 'react'
import Modal from '../UI/Modal'
import Wrapper from '../Helpers/Wrapper'

function AddUser(props) {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState({ error: false, title: '', message: '' })
    const addUserHandler = (event) => {
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        event.preventDefault()
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                error: true,
                title: 'Invalid input',
                message: 'Please give a name and age!',
            })
            return
        }
        if (parseInt(enteredAge) < 1) {
            setError({
                error: true,
                title: 'Invalid age',
                message: 'Age must be greater than 0!',
            })
            return
        }
        props.onAddUser({
            name: enteredName,
            age: enteredAge,
            key: Math.random().toString(),
        })
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const onOkayHandler = (event) =>
        setError({ error: false, title: '', message: '' })

    return (
        <Wrapper>
            {error.error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onOkay={onOkayHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        ref={nameInputRef}
                    />
                    <label htmlFor='age'>Age</label>
                    <input
                        type='number'
                        name='age'
                        id='age'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser

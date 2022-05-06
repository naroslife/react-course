import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
        // setUserInput({ ...userInput, enteredTitle: event.target.value })
        // If I depend on the previouse state below approach is safer than above because it guarantees prevState is the latest previous state.
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredTitle: event.target.value }
        // })
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({ ...userInput, enteredAmount: event.target.value })
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredAmount: event.target.value }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({ ...userInput, enteredDate: event.target.value })
        // setUserInput((prevState) => {
        //     return { ...userInput, enteredDate: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor=''>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor=''>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor=''>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min='2019-01-01'
                        step='2023-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm

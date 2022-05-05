import { useState } from 'react'
import './App.css'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
    const [expenses, setExpenses] = useState([
        { id: 'e1', title: 'item 1', amount: 294, date: new Date(2021, 2, 28) },
        { id: 'e2', title: 'item 2', amount: 300, date: new Date(2000, 5, 5) },
        { id: 'e3', title: 'item 3', amount: 450, date: new Date(1995, 2, 25) },
        { id: 'e4', title: 'item 4', amount: 2, date: new Date(2022, 3, 15) },
    ])

    const addExpenseHandler = (expenseData) => {
        setExpenses((prevState) => {
            return [expenseData, ...prevState]
        })
    }

    return (
        <div className='App'>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expenses={expenses} />
        </div>
    )
}

export default App

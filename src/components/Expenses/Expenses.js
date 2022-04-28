import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

function Expenses(props) {
    let rows = []
    props.expenses.forEach((expense) => {
        rows.push(
            <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
            />
        )
    })

    const [date, setDate] = useState('2021')

    const dateChangeHandler = (changedDate) => {
        setDate(changedDate)
        console.log(date)
    }
    return (
        <div>
            <ExpensesFilter
                onDateChange={dateChangeHandler}
                selectedDate={date}
            ></ExpensesFilter>
            <Card className='expenses'>{rows}</Card>
        </div>
    )
}

export default Expenses

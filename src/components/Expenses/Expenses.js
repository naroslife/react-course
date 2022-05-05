import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import { useState } from 'react'

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log(filteredYear)
    }

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(filteredYear)
    )

    return (
        <div>
            <ExpensesFilter
                onDateChange={filterChangeHandler}
                selectedDate={filteredYear}
            ></ExpensesFilter>
            <Card className='expenses'>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses

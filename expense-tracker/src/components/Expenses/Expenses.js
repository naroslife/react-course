import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
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
            <Card className='expenses'>
                <ExpensesFilter
                    onDateChange={filterChangeHandler}
                    selectedDate={filteredYear}
                ></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses

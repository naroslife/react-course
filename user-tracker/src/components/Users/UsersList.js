import Card from '../UI/Card'
import styles from './UsersList.module.css'

function UsersList(props) {
    const usersJsx = props.users.map((user) => {
        return (
            <li key={user.key}>
                {user.name} ({user.age} years old)
            </li>
        )
    })

    return (
        <Card className={styles.users}>
            <ul>{usersJsx}</ul>
        </Card>
    )
}

export default UsersList

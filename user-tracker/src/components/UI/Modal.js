import Button from './Button'
import Card from './Card'
import styles from './Modal.module.css'

function Modal(props) {
    return (
        <div>
            <div className={styles.backdrop} onClick={props.onOkay}></div>
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onOkay}>Okay</Button>
                </footer>
            </Card>
        </div>
    )
}

export default Modal

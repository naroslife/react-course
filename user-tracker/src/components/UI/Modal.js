import React from 'react'
import Button from './Button'
import Card from './Card'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

function Backdrop(props) {
    return <div className={styles.backdrop} onClick={props.onOkay}></div>
}

function ModalOverlay(props) {
    return (
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
    )
}

function Modal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onOkay={props.onOkay} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onOkay={props.onOkay}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default Modal

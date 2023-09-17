import styles from './SuccessPage.module.css'
import React, { useContext } from 'react'
import iconSuccess from 'assets/icon-success.svg'
import { SubscriptionContext } from 'context/Subscription'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

export default function SuccessPage() {

    const { email } = useContext(SubscriptionContext)
    const navigate = useNavigate()

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <img src={iconSuccess} alt="Checkmark" />
                <h1 className={styles.title}>Thanks for subscribing!</h1>
                <p className={styles.text}>
                    A confirmation email has been sent to <span className={styles.bold}>{email}</span>.
                    Please open it and click the button
                    inside to confirm your subscription.
                </p>
            </div>
            <Button handleClick={() => navigate("/")}>  
                Dismiss message
            </Button>
        </main>
    )
}

import React from 'react'
import styles from './FormPage.module.css'
import mobileBanner from 'assets/illustration-sign-up-mobile.svg'
import desktopBanner from 'assets/illustration-sign-up-desktop.svg'
import UpdatesList from 'components/UpdatesList'
import FormComponent from 'components/FormComponent'

export default function FormPage() {
    return (
        <main className={styles.main}>
            <picture className={styles.banner}>
                <source media="(min-width: 600px)" srcSet={desktopBanner} />
                <img src={mobileBanner} alt="Newsletter banner" />
            </picture>
            <div className={styles.text_container}>
                <h1 className={styles.title}>Stay Updated!</h1>
                <p className={styles.description}>Join 60.000+ product managers receiving monthly updates on:</p>
                <UpdatesList />
                <FormComponent />
            </div>
        </main>
    )
}

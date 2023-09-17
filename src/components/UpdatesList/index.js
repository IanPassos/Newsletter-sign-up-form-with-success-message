import React from 'react'
import styles from './UpdatesList.module.css'
import iconList from 'assets/icon-list.svg'

export default function UpdatesList() {
    return (
        <ul className={styles.list}>
            <li className={styles.list_item}>
                <img src={iconList} alt="Checkmark" />
                <p>Product discovery and building what matters</p>
            </li>
            <li className={styles.list_item}>
                <img src={iconList} alt="Checkmark" />
                <p>Measuring to ensure updates are a success</p>
            </li>
            <li className={styles.list_item}>
                <img src={iconList} alt="Checkmark" />
                <p>And much more!</p>
            </li>
        </ul>
    )
}

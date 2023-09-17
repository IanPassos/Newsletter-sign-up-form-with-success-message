import styles from './Button.module.css'

import React from 'react'

export default function Button( { type = "", children, handleClick}) {
    return (
        <button onClick={handleClick} type={type} className={styles.button}>
            {children}
        </button>
    )
}

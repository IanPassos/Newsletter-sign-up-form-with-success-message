import React from 'react'
import styles from './Input.module.css'
import { useField } from 'formik'

export default function Input({ label, ...props }) {

  const [field, meta] = useField(props)

  return (
    <>
      <div className={styles.container_error}>
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
        </label>
        {meta.touched && meta.error && <p className={styles.error}>{meta.error}</p>}
      </div>
      <input
        className={`${styles.input} ${meta.error && meta.touched ? styles.input_error : ""}`}
        {...field}
        {...props}
      />
    </>
  )
}

import styles from './FormComponent.module.css'
import React, { useContext } from 'react'
import { Form, Formik } from 'formik'
import { basicSchema } from 'utils/schemas'
import Input from 'components/Input'
import Button from 'components/Button'
import { SubscriptionContext } from 'context/Subscription'
import { useNavigate } from 'react-router-dom'

export default function FormComponent() {

    const { setEmail } = useContext(SubscriptionContext)
    const navigate = useNavigate()

    const onSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            setEmail(values.email)
            setSubmitting(false);
            navigate("/success")
        }, 400);
    }

    return (
        <Formik
            initialValues={{
                email: "",
            }}
            validationSchema={basicSchema}
            onSubmit={onSubmit}
        >
            <Form
                noValidate
                className={styles.form}
            >
                <Input
                    label="Email address"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@company.com"
                    autoComplete='on'
                />
                <Button type="submit" >
                    Subscribe to monthly newsletter
                </Button>
            </Form>
        </Formik >
    )
}

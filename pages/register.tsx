import { Formik, ErrorMessage } from 'formik'
import Link from 'next/link';
import styles from '../styles/register.module.css'
import * as Yup from 'yup'


export default function Register() {
    interface formValues {
        firstName: string,
        lastName: string,
        email: string,
        password: string | number
    }

    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be last than 15 characters')
            .required('Require'),
        lastName: Yup.string()
            .max(25, 'Must be last than 25 characters')
            .required('Require'),
        email: Yup.string()
            .email('This email is invalid')
            .required('Require'),
        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Require'),
    })

    return (
        <div className={styles.form__wrapper}>

            <h1>Create an Account</h1>

            <Formik<formValues>
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: ''
                }} onSubmit={(values: formValues): void => {
                    console.log(values);
                }}
                validationSchema={validate}
            >
                {props => (
                    <form className={styles.register__form} autoComplete='off' onSubmit={props.handleSubmit}>
                        <label>
                            First Name
                        </label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.firstName}
                            name="firstName"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='firstName' />
                        </span>
                        <label>
                            Last Name
                        </label>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.lastName}
                            name="lastName"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='lastName' />
                        </span>
                        <label>
                            Email
                        </label>
                        <input
                            type="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                            autoComplete='off'
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='email' />
                        </span>

                        <label>
                            Password
                        </label>
                        <input
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                        />
                        <span className={styles.error_message}>
                            <ErrorMessage name='password' />
                        </span>
                        <button type="submit">Register</button>
                        <span>Already have an account? <a href='#'>Login</a></span>
                        <span><Link href='/'>Home Page</Link></span>
                    </form>
                )}
            </Formik>
        </div>
    )
}
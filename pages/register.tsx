import { Formik } from 'formik'
import Link from 'next/link';
import  styles  from '../styles/register.module.css'


export default function Register() {
    interface formValues {
        firstName: string,
        lastName: string,
        email: string,
        password: string | number
    }

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
                        <button type="submit">Register</button>
                        <span>Already have an account? <a href='#'>Login</a></span>
                        <span><Link href='/'>Home Page</Link></span>
                    </form>
                )}
            </Formik>
        </div>
    )
}
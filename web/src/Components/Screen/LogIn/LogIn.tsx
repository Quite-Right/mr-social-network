import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Visibility, VisibilityOff } from '@styled-icons/material-rounded'

//src={showHidePassword ? <VisibilityOff /> : <Visibility />}
// <img className="login__input__block__img" src={showHidePassword ? <VisibilityOff /> : <Visibility />} alt="showPassword" onClick={() => changeShowHidePassword(!showHidePassword)} />


const validationSchema = Yup.object({
    login: Yup.string()
        .required('You need to enter your login'),
    password: Yup.string()
        .required('You need to enter your password'),
})


interface Props {

}

const LogIn = (props: Props) => {
    const initialValues = { login: '', password: '' };
    const [showHidePassword, changeShowHidePassword] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                });
            }}
        >
            {formik => {
                return (
                    <Form className="login">

                        <div className="login__input">
                            <label htmlFor="login">Login</label>
                            <Field className="login__input__block" type="text" id="login" name="login" placeholder="Enter your login" />
                            <ErrorMessage name="login" component="div" className="login__input__error" />
                        </div>

                        <div className="login__input">
                            <label htmlFor="password">Password</label>
                            <div className="login__input__block">
                                <Field className="login__input__block__field" type={showHidePassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" />
                                {showHidePassword   ? <Visibility className="login__input__block__img" onClick={() => changeShowHidePassword(!showHidePassword)} title="Hide password" />
                                                    : <VisibilityOff className="login__input__block__img" onClick={() => changeShowHidePassword(!showHidePassword)} title="Show password" />}
                            </div>
                            <ErrorMessage name="password" component="div" className="login__input__error" />
                        </div>


                        <button type="submit" className="login__button">Sing up</button>
                        <div>Don't have an account? <a href="/registration" className="htmllink">Sing up.</a></div>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default LogIn

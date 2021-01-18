import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import showPassword from "../../../Images/menu.png"

interface Props {

}

const LogIn = (props: Props) => {
    const initialValues = { login: '', password: '' };
    const [showHidePassword, changeShowHidePassword] = useState(false);
    return (
        <Formik
            initialValues={initialValues}
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
                        </div>

                        <div className="login__input">
                            <label htmlFor="password">Password</label>
                            <div className="login__input__block">
                                <Field className="login__input__block__field" type={showHidePassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" />
                                <img className="login__input__block__img" src={showPassword} alt="showPassword" onClick={() => changeShowHidePassword(!showHidePassword)} />
                            </div>
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

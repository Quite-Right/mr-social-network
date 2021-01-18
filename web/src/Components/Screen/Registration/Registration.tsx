import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Visibility, VisibilityOff } from '@styled-icons/material-rounded'

interface Props {
}
const loginData = ["David", "Vishwas", "Egor", "Dmitriy"];

interface MyInitialValues {
  login: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  passwordConfirm: string;
}

const validationSchema = Yup.object({
  login: Yup.string()
    .min(2, 'Login is too short')
    .max(12, 'Login is too long')
    .required('You need to enter your login'),
  email: Yup.string()
    .email(`Invalid email format. Make sure it's written like example@email.com`)
    .required('You need to enter your email'),
  name: Yup.string(),
  surname: Yup.string(),
  password: Yup.string()
    .min(8, 'Password is too short')
    .max(24, 'Password is too long')
    .required('You need to enter your password'),
  passwordConfirm: Yup
    .string()
    .required('You need to confirm your password')
    .test("test", "Passwords don't match", function (value) {
      return this.parent.password === value;
    })
})

function UsedLogin(value: string) {
  let error;
  loginData.forEach((item, i, arr) => {
    if (JSON.stringify(value) === JSON.stringify(item)) {
      error = "Login exist"
    }
  }
  );
  return error;
}

function validatePassword(value: string) {
  let error = "";
  const passwordReg = /(?=.*[0-9])/;
  if (!passwordReg.test(value)) {
    error = "Invalid password format. Password must contain one number.";
  }
  return error;
}


const Registration = (props: Props) => {
  const initialValues: MyInitialValues = { login: '', email: '', name: '', surname: '', password: '', passwordConfirm: '' };
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const [showHidePasswordConfirm, changeShowHidePasswordConfirm] = useState(false);
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
      {/* <div className="registration__input__field"></div> */}
      {formik => {
        return (
          <Form className="registration">

            <div className="registration__input">
              <label htmlFor="login" className="required">Login</label>
              <Field className="registration__input__block" type="text" id="login" name="login" placeholder="Enter your login" validate={UsedLogin} />
              <ErrorMessage name="login" component="div" className="registration__input__error" />
            </div>
            <div className="registration__input">
              <label htmlFor="email" className="required">E-mail</label>
              <Field className="registration__input__block" type="email" id="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="registration__input__error" />
            </div>

            <div className="registration__input">
              <label htmlFor="name">Name</label>
              <Field className="registration__input__block" type="text" id="name" name="name" placeholder="Enter your name" />
            </div>
            <div className="registration__input">
              <label htmlFor="surname">Surname</label>
              <Field className="registration__input__block" type="text" id="surname" name="surname" placeholder="Enter your surname" />
            </div>

            <div className="registration__input">
              <label htmlFor="password" className="required">Password</label>
              <div className="registration__input__block">
                <Field className="registration__input__block__field" type={showHidePassword ? "text" : "password"} id="password" name="password" placeholder="Enter your password" validate={validatePassword} />
                {showHidePassword   ? <Visibility className="registration__input__block__img" onClick={() => changeShowHidePassword(!showHidePassword)} title="Hide password" />
                                    : <VisibilityOff className="registration__input__block__img" onClick={() => changeShowHidePassword(!showHidePassword)} title="Show password" />}
              </div>
              <ErrorMessage name="password" component="div" className="registration__input__error" />
            </div>
            <div className="registration__input">
              <label htmlFor="password" className="required">Password confirm</label>
              <div className="registration__input__block">
                <Field className="registration__input__block__field" type={showHidePasswordConfirm ? "text" : "password"} id="passwordConfirm" placeholder="Enter your password again" name="passwordConfirm" />
                {showHidePasswordConfirm  ? <Visibility className="registration__input__block__img" onClick={() => changeShowHidePasswordConfirm(!showHidePasswordConfirm)} title="Hide password" />
                                          : <VisibilityOff className="registration__input__block__img" onClick={() => changeShowHidePasswordConfirm(!showHidePasswordConfirm)} title="Show password" />}

              </div>
              <ErrorMessage name="passwordConfirm" component="div" className="registration__input__error" />
            </div>

            <button type="submit" className="registration__button">Sing up</button>
            <div>Have an account? <a href="/login" className="htmllink">Log in.</a></div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default Registration

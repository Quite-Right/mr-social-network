import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
//FormikErrors, FormikValues
interface Props {

}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required!'),
    pass: Yup.string().required('Required!')
  })

const initialValues = {
    name: '',
    email:'',
    pass:''
}

const Registration = (props: Props) => {

    const formik = useFormik({
        initialValues,
        //validate,
        validationSchema,
        onSubmit: values => {
            console.log('Values', formik.values);
        }
    });

    console.log('Errors', formik.errors);
    
    return (
        <>
            <form className="registration" onSubmit={formik.handleSubmit}>

                <div className="registration_input">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {... formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                </div>
                {/* onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}  */}
                <div className="registration_input">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" {... formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>

                <div className="registration_input">
                    <label htmlFor="">Pass</label>
                    <input type="text" id="pass" {... formik.getFieldProps('pass')}/>
                    {formik.touched.pass && formik.errors.pass ? <div>{formik.errors.pass}</div> : null}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
        )
}

export default Registration

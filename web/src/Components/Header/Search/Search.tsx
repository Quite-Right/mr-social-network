import React, { ReactElement } from 'react'
import { Formik, Form, Field } from 'formik'
import { Search as SearchIcon } from '@styled-icons/material'

interface Props {
}

const Search = (props: Props): ReactElement => {
    const initialValues = { search: '' };
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
                    <Form className="search" >
                        <Field className="search__field" type="text" id="search" name="search" placeholder="Search..." />
                        <SearchIcon className="search__icon" type="submit" onClick={formik.submitForm} />
                    </Form>
                )
            }}
        </Formik>
    )
}

export default Search;

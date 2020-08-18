import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

function FormikForm() {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }
    
    const onSubmit = values => {
        axios.post('HERE YOU CAN PLACE YOUR POST-API & INSERT IN DB', values)
        console.log('Form data', values)
    }
    
    const validationSchema = Yup.object({
        name : Yup.string().required('Required'),
        email : Yup.string()
        .email('Invalid')
        .required('Required'),
        password : Yup.string().required('Required')
    })
    
    return (
        <Formik initialValues = {initialValues}
               validationSchema = {validationSchema}
               onSubmit = {onSubmit}>
            <Form>
                <div className = 'form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' />
                    <ErrorMessage name= 'name' />
                </div>

                <div className = 'form-control'>
                    <label htmlFor='email'>Email</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage name= 'email' />
                </div>

                <div className = 'form-control'>
                    <label htmlFor='Password'>Password</label>
                    <Field type='password' id='password' name='password' />
                    <ErrorMessage name= 'password' />
                </div>


                <button type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    )
}

export default FormikForm
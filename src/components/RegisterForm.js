import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import FormTextField from './FormTextField';

const RegisterForm = () => {
  return (
    <div>
      <Typography varient="h2">
        Create a new account
      </Typography>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          displayName: '',
          email: '',
          password: ''
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          alert('formSubmitted');
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup
            .string()
            .required('Required'),
          lastName: Yup
            .string()
            .required('Required'),
          displayName: Yup
            .string()
            .min(5, 'Must contain at least ${min} characters')      // eslint-disable-line no-template-curly-in-string
            .max(15, 'May contain no more than ${max} characters')  // eslint-disable-line no-template-curly-in-string
            .required('Required'),
          email: Yup
            .string()
            .email('Invalid email')
            .required('Required'),
          password: Yup
            .string()
            .min(8, 'Must contain at least ${min} characters')     // eslint-disable-line no-template-curly-in-string
            .requird('Required')
        })}
      >
        {props => (
          <Form>
            <div>
              <FormTextField
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <FormTextField
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <FormTextField
                name="displayName"
                type="text"
                placeholder="Display Name"
              />
              <FormTextField
                name="email"
                type="email"
                placeholder="Email"
              />
              <FormTextField
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <Button type="submit">
              Submit
            </Button>
            <pre>{JSON.stringify(props.values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
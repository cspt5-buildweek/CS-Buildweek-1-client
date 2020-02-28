import React from 'react';
import { Formik, Form } from 'formik';

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
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import FormTextField from './FormTextField';

const LoginForm = () => {
  return (
    <div>
    <Typography varient="h2">
      Sign in
    </Typography>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        alert('formSubmitted');
        actions.setSubmitting(false);
      }}
      validationSchema={Yup.object().shape({
        email: Yup
          .string()
          .email('Invalid Email')
          .required('Required'),
        password: Yup
          .string()
          .required('Required')
      })}
    >
      {props => (
        <Form>
          <div>
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

export default LoginForm;
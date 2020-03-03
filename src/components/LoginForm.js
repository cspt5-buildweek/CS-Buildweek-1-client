import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import FormTextField from './FormTextField';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > .MuiFormControl-root {
    height: 2rem;
  }

  & > * {
    margin: 1rem 0;
  }
`;

const LoginForm = () => {
  return (
    <div>
      <Typography variant="h3" align="center">
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
            <LayoutWrapper>
              <FormTextField
                name="email"
                type="email"
                placeholder="Email"
                fullWidth
                margin="normal"
              />
              <FormTextField
                name="password"
                type="password"
                placeholder="Password"
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={props.isSubmitting}
              >
                Log In
              </Button>
            </LayoutWrapper>
            {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
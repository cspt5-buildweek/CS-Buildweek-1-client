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

const HorizonalWrapper = styled.div`
    display: flex;
    flex-direction: row;

    & > * {
      flex: 1;
      margin: 0 0.5rem;

      :first-child {
        margin-left: 0;
      }

      :last-child {
        margin-right: 0;
      }
    } 
`;

const RegisterForm = () => {
  return (
    <div>
      <Typography variant="h3"  align="center">
        Create account
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
            .min(8, 'Must contain at least ${min} characters')      // eslint-disable-line no-template-curly-in-string
            .required('Required')
        })}
      >
        {props => (
          <Form>
            <LayoutWrapper>
              <HorizonalWrapper>
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
              </HorizonalWrapper>
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
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={props.isSubmitting}
              >
                Register
              </Button>
            </LayoutWrapper>
            {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
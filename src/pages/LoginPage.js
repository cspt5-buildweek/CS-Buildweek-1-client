import React, { useState, /*useContext*/ } from 'react';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// import { UserContext } from '../hooks/useUserContext';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const LoginPaper = styled(Paper)`
  width: 100%;
  padding: 1.5rem;
  display: 'flex';

  .select-login-type {
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin: 10px;
    }
  };
`;

const LoginPage = () => {
  const [hasAccount, setHasAccount] = useState(true);
  // const userData = useContext(UserContext);

  return (
    <Container maxWidth="sm">
      <LoginPaper>
        {hasAccount
          ? <LoginForm />
          : <RegisterForm />}

        <Divider variant="middle" />

        <div className="select-login-type">
          <Typography variant="subtitle1">
            {hasAccount ? 'New around here?' : 'Already a member?'}
          </Typography>
          <Button onClick={() => setHasAccount(prev => !prev)}>
            {hasAccount ? 'Sign up' : 'Sign in'}
          </Button>
        </div>
      </LoginPaper>
    </Container>
  );
};

export default LoginPage;
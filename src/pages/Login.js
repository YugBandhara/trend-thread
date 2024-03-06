import React, { useState } from 'react';
import { TextField, Button, Paper, Link,Typography, Container, Grid } from '@mui/material';
import { useNavigate  } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const navigate = useNavigate ();

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setIsEmailValid(event.target.value.includes('@') || event.target.value=="");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username !== 'admin@' || password !== 'admin') {
      setError(true);
      setUsername("");
      setPassword("")
    }
    else{
      setError(false)
      navigate('/Dashboard');
    }

    
  };

  return (
    <div style={{ backgroundColor: 'rgb(157 200 231)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: 20 }} >
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center' }}>
              <img src = "/assets/images/loginback.jpg" alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant="h5" gutterBottom>Login</Typography>
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={username}
                  onChange={handleUsernameChange}
                  error={!isEmailValid}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {error && <Typography variant="body2" color="error" align="center">Invalid username/password</Typography>}
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
                  Login
                </Button>
              </form>
              <Typography variant="body2" align="center" color="textSecondary" style={{ marginTop: 10 }}>
                Don't have an account? <Link href="/register" color="primary">Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

export default Login;

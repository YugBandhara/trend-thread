import React from 'react';
import { TextField, Button, Paper, Link,Typography, Container } from '@mui/material';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>
            Login
          </Button>
        </form>
        <Typography variant="body2" align="center" color="textSecondary">
      Don't have an account? <Link href="/register" color="primary">Register</Link>
    </Typography>
      </Paper>
    </Container>
  );
};

export default Login;

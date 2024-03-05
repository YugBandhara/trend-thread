import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  styled,
  Link,
  AlertTitle,
  Alert,
  Snackbar,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch, useSelector } from 'react-redux';
import { clearuserRegister, userRegister } from '../actions/userActions';
import MuiAlert from '@mui/material/Alert';


const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
  background: 'linear-gradient(45deg, #4CAF50 30%, #2196F3 90%)',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #45a049 30%, #1976D2 90%)',
  },
}));


const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRetypePassword, setUserRetypePassword] = useState("");
  const [isPasswordCorrectMatches, setPasswordMatches] = useState(true)
  const [isUserCorrect, setUserCorrect] = useState(true)
  const [isEmailcorrect, setUserEmailCorrect] = useState(true)
  const [isPasswordCorrect, setPasswordCorrect] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const userRegisterResponse = useSelector(state => state.userReducer.userData)
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onRegisterUser = () => {
    setUserCorrect(!!userName);
    setUserEmailCorrect(!!userEmail);
    setPasswordCorrect(!!userPassword);
    setPasswordMatches(userPassword === userRetypePassword);
    if (isUserCorrect && isEmailcorrect && isPasswordCorrectMatches && isPasswordCorrect) {
      let params = {
        "custName": userName,
        "custEmail": userEmail,
        "custPassword": userPassword
      }
      dispatch(userRegister(params))
    }

  }
  useEffect(() => {
    // Set a timeout to hide the alert after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowAlert(false);
      dispatch(clearuserRegister())
    }, 3000);

    return () => {
      // Clear the timeout when the component unmounts
      clearTimeout(timeoutId);

    };
  }, [showAlert]);
  // console.log(userRegisterResponse,"userRegisterResponse")
  // if(userRegisterResponse!=null){
  //   console.log("yessss",userRegisterResponse)
  //   setShowAlert(true)
  // }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography variant="h5">Register</Typography>
        <form>
          <StyledTextField
            variant="outlined"
            fullWidth
            onChange={(event) => { setUserName(event.target.value) }}
            value={userName}
            required
            id="name"
            label="Name"
            name="name"
            error={!isUserCorrect}
          />
          <StyledTextField
            variant="outlined"
            required
            fullWidth
            onChange={(event) => { setUserEmail(event.target.value) }}
            value={userEmail}
            id="email"
            label="Email Address"
            name="email"
            error={!isEmailcorrect}
          />
          <StyledTextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            onChange={(event) => { setUserPassword(event.target.value) }}
            value={userPassword}
            id="password"
            error={!isPasswordCorrect}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledTextField
            variant="outlined"
            required={true}
            fullWidth
            onChange={(event) => { setUserRetypePassword(event.target.value) }}
            value={userRetypePassword}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            error={!isPasswordCorrectMatches}


          />
          <StyledButton type="button" variant="contained" fullWidth onClick={() => { onRegisterUser() }}>
            Register
          </StyledButton>
        </form>
        <Typography variant="body2" align="center" color="textSecondary">
          Already have an account? <Link href="/" color="primary">Login</Link>
        </Typography>
        {/* <Snackbar
        open={showAlert}
        autoHideDuration={3000} // Hide after 3 seconds
        onClose={() => setShowAlert(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity="success"
          onClose={() => setShowAlert(false)}
        >
          Data fetched successfully!
        </MuiAlert>
      </Snackbar> */}
      </StyledPaper>
    </Container>
  );
};

export default Register;

import React, {useState} from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import useStyles from './styles';
import Input from './Input';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';

export const Auth = () => {
  const user = false;
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); 
  const dispatch = useDispatch();
 
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

  const switchMode= () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false)
  };

  const handleSubmit= () => {

  };
  const handleChange = () => {

  };
  const googleSuccess = async (res) => {
    // console.log(res);
    const result = jwt_decode(res?.credential); // ?. does not throw error if obj does not exist it throws undefined
    console.log(result);

    try {
        dispatch({ type: 'AUTH', data: { result }})
    } catch (error) {
        console.log(error)
    }
};
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later.")
  }

  return (
    <Container component = "main" maxWidth="xs"> 
      <Paper className = {classes.paper} elevation = {3}>
        <Avatar className = {classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant = "h5">{isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className = {classes.form} onSubmit={handleSubmit}>
          <Grid container spacing = {2}>
            {isSignup && (
            <>
              <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
              <Input name = "firstName" label = "First Name" handleChange = {handleChange} autoFocus half/>
            </>
            )}
            <Input name = "email" label = "Email Address" handleChange= {handleChange} type = 
              "email"/>
            <Input name = "password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
            { isSignup && <Input name="confirmPassword" label = "Repeat Password" handleChange = {handleChange} type="password"/>}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color = "primary" className={classes.submit}>
                {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <div>
            {user ? (
            <div>Logged In</div>
            ) : (
            <GoogleLogin
              onSuccess={googleSuccess}
              onError={googleFailure}
              cookiePolicy="single_host_origin"
            />
          )}
        </div>
          <Grid container justify-content ="flex-end">
            <Grid item>
              <Button onClick = {switchMode}>
                {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </Button>
            </Grid>
          </Grid>
        </form> 
      </Paper>
    </Container>

  )
}

export default Auth; 
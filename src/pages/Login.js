import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Checkbox from "@material-ui/core/Checkbox";
import Styles from "./styles/login";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default function Login() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
    rememberMe: false,
  });
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const classes = Styles();
  return (
    <Grid
      container
      direction="column"
      style={{ height: "100%" }}
      justify="center"
    >
      <Container fixed align="center" maxWidth="sm" style={{ padding: 5 }}>
        <Paper>
          <Box p={2}>
            <Typography variant="h3" gutterBottom className={classes.header}>
              Login
            </Typography>
            <TextField
              id="outlined-basic"
              label="Username or Email"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange("email")}
              className={classes.margin}
            />
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
              />
            </FormControl>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              className={classes.margin}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() =>
                  setValues({
                    ...values,
                    rememberMe: !values.rememberMe,
                  })
                }
              >
                <Checkbox
                  checked={values.rememberMe}
                  onChange={(event) => {
                    setValues({
                      ...values,
                      [event.target.name]: event.target.checked,
                    });
                  }}
                  name="rememberMe"
                  color="primary"
                  style={{ padding: 4 }}
                />
                <span>Remember</span>
              </div>

              <Button color="primary" component={Link} to={"/forgotpassword"}>
                Forgot password?
              </Button>
            </Grid>
            <Button
              style={{ padding: "0.8em" }}
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
              fullWidth
              disabled={values.email === "" || values.password === ""}
            >
              Login
            </Button>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.margin}
            >
              <Typography>Doesn't have an account?</Typography>
              <Button
                color="primary"
                component={Link}
                to={"/register"}
                style={{ fontSize: "0.9em" }}
              >
                Create Account
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
}

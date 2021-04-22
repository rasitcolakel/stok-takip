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
import Styles from "./styles/login";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
export default function Register() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
    confirmPassword: "",
    showConfirmPassword: false,
  });

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
              Register
            </Typography>
            <TextField
              id="outlined-basic"
              label="Name and Surname"
              variant="outlined"
              fullWidth
              value={values.name}
              onChange={handleChange("name")}
              className={classes.margin}
            />
            <TextField
              id="outlined-basic"
              label="Username or Email"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange("email")}
              className={classes.margin}
            />
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.margin}
            >
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
                      onClick={() =>
                        setValues({
                          ...values,
                          showPassword: !values.showPassword,
                        })
                      }
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
            <FormControl
              variant="outlined"
              fullWidth
              className={classes.margin}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showConfirmPassword ? "text" : "password"}
                value={values.confirmPassword}
                onChange={handleChange("confirmPassword")}
                label="Confirm Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setValues({
                          ...values,
                          showConfirmPassword: !values.showConfirmPassword,
                        })
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                fullWidth
              />
            </FormControl>

            <Button
              style={{ padding: "0.8em" }}
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
              fullWidth
              disabled={values.email === "" || values.password === ""}
            >
              Register
            </Button>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.margin}
            >
              <Typography>Do you have account?</Typography>
              <Button
                color="primary"
                component={Link}
                to={"/login"}
                style={{ fontSize: "0.9em" }}
              >
                Log In
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
}

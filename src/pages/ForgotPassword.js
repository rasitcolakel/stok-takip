import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Styles from "./styles/login";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [values, setValues] = React.useState({
    email: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const classes = Styles();
  const EmailOrUsername = () => {
    return (
      /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/i.test(
        values.email
      ) || /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i.test(values.email)
    );
  };
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
              Forgot Password
            </Typography>
            <TextField
              id="outlined-basic"
              label="Email address or Username"
              variant="outlined"
              fullWidth
              value={values.email}
              onChange={handleChange("email")}
              className={classes.margin}
            />

            <Button
              style={{ padding: "0.8em" }}
              variant="contained"
              size="large"
              color="primary"
              className={classes.margin}
              fullWidth
              disabled={!EmailOrUsername()}
            >
              Reset
            </Button>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.margin}
            >
              <Button color="primary" component={Link} to={"/login"}>
                Log In
              </Button>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Grid>
  );
}

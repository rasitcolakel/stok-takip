import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "red",
  },

  margin: {
    marginBottom: theme.spacing(3),
  },
  header: {
    marginBottom: theme.spacing(7),
    marginTop: theme.spacing(4),
  },
}));

export default useStyles;

import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // borderRadius: 3,
    border: 0,
    color: "white",
    // height: 40,
    // padding: '0 30px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 250,
    height: 250,
    marginRight: "auto",
    marginLeft: "auto",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  errotext: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
}));

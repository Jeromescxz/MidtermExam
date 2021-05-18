import { useState } from "react";
import React from "react";
import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  IconButton,
  Divider,
  Typography,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "../utils/firebase";
// icons
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShopIcon from "@material-ui/icons/Store";
import ExitToApp from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles({
  drawer: {
    color: "white",
  },
  appbar: {
    backgroundColor: "white",
  },
  signout: {
    borderTop: "1px solid white",
    borderBottom: "1px solid white",
    marginTop: 30,
    "&:hover": {
      background: "#D32F2F",
    },
  },
  listitem: {
    marginTop: 8,
  },
});

const signout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
function Nav() {
  const [open, setOpen] = useState(false);
  const history = useHistory("");
  const classes = useStyles();
  return (
    <AppBar position="sticky" className={classes.appbar} elevation={8}>
      <Toolbar>
        <IconButton color="primary" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography color="primary" variant="h5">
          <Box fontWeight="fontWeightMedium" fontStyle="italic" m={1}>
            Vetenerary Clinic
          </Box>
        </Typography>

        <SwipeableDrawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => {
            setOpen(true);
          }}
        >
          <Box bgcolor="primary.main" height="100vh" width="200px">
            <List className={classes.drawer}>
              <Typography variant="h6">Our Website</Typography>
              <Divider />
              <ListItem
                className={classes.listitem}
                button
                onClick={() => history.push("/home")}
              >
                <HomeIcon />
                <ListItemText primary={"Home"} />
              </ListItem>

              <ListItem
                className={classes.listitem}
                button
                onClick={() => history.push("/services")}
              >
                <ShopIcon />
                <ListItemText primary={"Services"} />
              </ListItem>

              <div className={classes.signout}>
                <ListItem button onClick={signout}>
                  <ExitToApp />
                  <ListItemText primary={"Signout"} />
                </ListItem>
              </div>
            </List>
          </Box>
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;

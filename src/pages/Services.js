import React from "react";
import Nav from "../components/Nav";
import {
  Card,
  Typography,
  CardMedia,
  CardContent,
  makeStyles,
  Grid,
  Paper,
} from "@material-ui/core";
//image
import Grooming from "../Image/Grooming.jpg";
import Vaccination from "../Image/Vacination.jpg";
import Checkup from "../Image/Checkup.jpg";

const useStyles = makeStyles({
  root: {
    padding: 60,
  },
  card: {
    margin: 20,
    height: 300,
    width: 250,
    minWidth: 200,

    marginTop: 50,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "10px 15px 3px  rgb(66, 139, 139)",
    },
  },
  media: {
    minHeight: 200,
    width: "100%",
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  description: {
    marginLeft: 20,
  },
});
const Alert = (event) => {
  alert("Request has been sent");
};
function Services() {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <Paper className={classes.root}>
        <Typography variant="h1">Services</Typography>
        <Typography className={classes.description} variant="body1">
          We Offer High Quality Service
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2.2}>
            <Card className={classes.card} elevation={10} onClick={Alert}>
              <CardMedia className={classes.media} image={Grooming}></CardMedia>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Grooming
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <Card className={classes.card} elevation={10} onClick={Alert}>
              <CardMedia className={classes.media} image={Checkup}></CardMedia>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Checkup
                </Typography>
                <Typography variant="body2" component="p" m={1}>
                  Course
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={2.5}>
            <Card className={classes.card} elevation={10} onClick={Alert}>
              <CardMedia
                className={classes.media}
                image={Vaccination}
              ></CardMedia>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Vaccination
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Services;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import GroupIcon from "@material-ui/icons/Group";
import { Typography } from "@material-ui/core";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  let [cards, setCards] = useState([
    {
      name: "Kullanıcılar",
      count: 15,
      link: "/users",
      icon: <GroupIcon style={{ fontSize: "5em", color: "white" }} />,
      colors: {
        primary: "#ff5722",
        secondary: "#b23c17",
      },
    },
    {
      name: "Depolar",
      count: 25,
      link: "/stores",
      icon: (
        <StoreMallDirectoryRoundedIcon
          style={{ fontSize: "5em", color: "white" }}
        />
      ),
      colors: {
        primary: "#4caf50",
        secondary: "#357a38",
      },
    },
    {
      name: "Kategoriler",
      count: 15,
      link: "/categories",
      icon: <CategoryRoundedIcon style={{ fontSize: "5em", color: "white" }} />,
      colors: {
        primary: "#2196f3",
        secondary: "#1769aa",
      },
    },
    {
      name: "Ürünler",
      count: 1999,
      link: "/products",
      icon: <ListAltRoundedIcon style={{ fontSize: "5em", color: "white" }} />,
      colors: {
        primary: "#ff9800",
        secondary: "#b26a00",
      },
    },
  ]);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} md={6} lg={3} sm={3}>
            <Box
              className={classes.card}
              variant="outlined"
              bgcolor={card.colors.primary}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={2}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant={"button"}
                  style={{ textAlign: "left", color: "white" }}
                >
                  {card.name}
                </Typography>
                <Typography
                  style={{
                    textAlign: "left",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  variant={"h4"}
                >
                  {card.count}
                </Typography>
              </div>
              {card.icon}
            </Box>
            <Box
              bgcolor={card.colors.secondary}
              color="secondary.contrastText"
              display="flex"
              justifyContent="flex-end"
            >
              <CardActions>
                <Button
                  size="small"
                  color="inherit"
                  component={Link}
                  to={card.link}
                  endIcon={<ArrowForwardIcon />}
                >
                  Göster
                </Button>
              </CardActions>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { useLocation, Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    display: "flex",
    flex: 1,
  },
  fullList: {
    width: "auto",
  },
  root: {
    flexGrow: 1,
  },
  profileArea: {
    marginLeft: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
  },
}));
export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  const location = useLocation();
  const currentRoute = location.pathname;
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isLogged] = React.useState(localStorage.getItem("user"));
  let drawerItems = [
    {
      text: "Anasayfa",
      icon: <HomeRoundedIcon color={"primary"} />,
      link: "/",
    },
    {
      text: "Depolar",
      icon: <StoreMallDirectoryRoundedIcon color={"primary"} />,
      link: "/stores",
    },
    {
      text: "Kategoriler",
      icon: <CategoryRoundedIcon color={"primary"} />,
      link: "/categories",
    },
    {
      text: "Ürünler",
      icon: <ListAltRoundedIcon color={"primary"} />,
      link: "/products",
    },
    {
      text: "Çıkış Yap",
      icon: <ExitToAppRoundedIcon color={"secondary"} />,
      link: "/logout",
    },
  ];
  const drawer = (
    <div className={classes.list}>
      <List style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {drawerItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.link}
            onClick={() => setIsDrawerOpen(false)}
            selected={item.link === currentRoute}
            style={{ marginTop: item.link === "/logout" ? "auto" : 0 }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          {isLogged && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              onClick={() => setIsDrawerOpen(true)}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          )}
          {isLogged ? (
            <Typography variant="h6" className={classes.title} color="primary">
              Stok Takip
            </Typography>
          ) : (
            <Typography variant="h6" className={classes.title} color="primary">
              Stok Takip
            </Typography>
          )}
          {isLogged ? (
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                Profil
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to={"/profile"}
                >
                  Hesabım
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to={"/logout"}>
                  Çıkış
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className={classes.profileArea}>
              <Button
                className={classes.menuButton}
                variant={currentRoute === "/login" ? "contained" : "text"}
                color="primary"
                component={Link}
                to={"/login"}
              >
                Giriş
              </Button>
              <Button
                variant={currentRoute === "/register" ? "contained" : "text"}
                className={classes.menuButton}
                color="primary"
                component={Link}
                to={"/register"}
              >
                Kayıt Ol
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {isLogged && (
        <Drawer
          anchor={"left"}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          {drawer}
        </Drawer>
      )}
    </div>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// drawer
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const items = [
  "Home",
  "Fashion",
  "Beauty",
  "Advertising",
  "Product",
  "Contact",
];

const navbarList = (anchor) => (
  <Box
    sx={{
      width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      mt: 7,
    }}
    role="presentation"
  >
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {items.map((text, index) => (
        <ListItem key={text}>
          <ListItemButton
            sx={{
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.orange",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <ListItemText
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: text == "Contact" && "primary.orange",
              }}
              primary={text}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Box sx={{ flexGrow: 1 }} flexDirection="column" />
    {/* footer */}
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <IconButton size="large" edge="start" color="inherit">
        <MenuIcon />
      </IconButton>
    </Box>
  </Box>
);

const Navbar = () => {
  const [state, setState] = React.useState(true);
  const anchor = "left";

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {navbarList(anchor)}
        </Drawer>
      </React.Fragment>

      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          // backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            variant="text"
            sx={{
              borderColor: "white",
              color: "white",
            }}
          >
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

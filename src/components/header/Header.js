// Header.js
'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.module.scss'; // Import your Sass file

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft:5
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  logo: {
    width: '40px', // Adjust the width as needed
    borderRadius: 10
    // marginRight: theme.spacing(1),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      <ListItem button onClick={toggleDrawer}>
        <ListItemText primary="FAQ" />
      </ListItem>
      <ListItem button onClick={toggleDrawer}>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'blue' }}>
                <Toolbar>
                <img src="logo.svg" alt="Robust" className={classes.logo} />

                <Typography variant="h8" className={classes.title}>
                        Robust Solutions
                </Typography>          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>        </Toolbar>
      </AppBar>

      {/* Responsive Drawer */}
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default Header;

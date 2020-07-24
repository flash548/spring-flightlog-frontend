import React, { useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import FlightsTable from './FlightsTable';

const useStyles = makeStyles((theme) => ({
      root: {
              flexGrow: 1,
            },
      menuButton: {
              marginRight: theme.spacing(2),
            },
      title: {
              flexGrow: 1,
            },
}));

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const classes = useStyles();

  const setButtonPos = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  }

  let closeMenu = () => {
    setMenuOpen(false);
  }

  return (
    <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" onClick={setButtonPos} className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Menu id='simple' anchorEl={anchorEl} open={menuOpen} onClose={closeMenu}>
                <MenuItem onClick={closeMenu}>Flights</MenuItem>
            </Menu>
            <Typography variant="h6" className={classes.title}>
              Home 
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <FlightsTable />
        </Container>
      </div>
  )
}

export default App;

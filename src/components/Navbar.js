import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }}>
      <Toolbar>
        <Typography variant="h6" style={{ color: '#333' }}>
          React Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

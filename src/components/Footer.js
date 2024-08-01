import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box mt={5} p={3} className="glass-effect" style={{ position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
      <Typography variant="body1">
        © 2024 Zayd Dashboard
      </Typography>
    </Box>
  );
}

export default Footer;

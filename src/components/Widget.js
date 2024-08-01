import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Widget({ title, value, color = 'default' }) {
  return (
    <Card className="glass-effect" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Widget;

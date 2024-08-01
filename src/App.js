import React from 'react';
import Navbar from './components/Navbar';
import Widget from './components/Widget';
import Footer from './components/Footer';
import { Container, Grid } from '@mui/material';

function App() {
  return (
    <div style={{ padding: '20px', minHeight: '100vh' }}>
      <Navbar />
      <Container>
        <Grid container spacing={3} marginTop={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Sales" value="$10k" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Visits" value="500k" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Comments" value="130" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Widget title="Shares" value="80" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

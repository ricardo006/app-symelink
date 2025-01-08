import React from 'react';
import { CssBaseline, Grid, Typography } from '@mui/material';
import LinkFlowBar from './components/LinkFlowBar';
import WelcomeUser from './components/WelcomeUser';
import { ThemeContextProvider } from './contexts/ThemeContext'; // Apenas ThemeContextProvider aqui
import LinkForm from './components/Links/LinkForm';

const App: React.FC = () => {
  // Função de exemplo para o onSave
  const handleSave = (linkData: { name: string }) => {
    console.log('Link saved:', linkData);
  };

  return (
    <ThemeContextProvider>
      <CssBaseline />
      <LinkFlowBar />
      <main style={{ padding: '16px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>Dashboard</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={7}>
            <WelcomeUser />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={5}>
            <WelcomeUser />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={7}>
            <LinkForm onSave={handleSave} />
          </Grid>
        </Grid>

        
      </main>
    </ThemeContextProvider>
  );
};

export default App;

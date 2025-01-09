import React from 'react';
import './index.css';
import { CssBaseline, Grid, Typography } from '@mui/material';
import LinkFlowBar from './components/LinkFlowBar';
import WelcomeUser from './components/WelcomeUser';
import { ThemeContextProvider } from './contexts/ThemeContext'; // Apenas ThemeContextProvider aqui
import LinkForm from './components/Links/LinkForm';
import Pages from './components/MyPages/Pages';
import MyGroups from './components/GroupLinks/MyGroups';

const App: React.FC = () => {
  // Função de exemplo para o onSave
  const handleSave = (linkData: { name: string }) => {
    console.log('Link saved:', linkData);
  };

  const pages = [
    { id: 1, name: "Página 1" },
    { id: 2, name: "Página 2" },
  ];

  const groups = [
    { id: 1, name: "Grupo 1" },
    { id: 2, name: "Grupo 2" },
    { id: 2, name: "Grupo 3" },
  ];

  const handleEdit = (id: number) => {
    console.log(`Editar página com ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    console.log(`Excluir página com ID: ${id}`);
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

          <Grid item xs={12} sm={6} md={4} lg={8}>
            <WelcomeUser />
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <WelcomeUser />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={4}>
            <LinkForm />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Pages
              pages={pages}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <MyGroups 
              groups={groups}
              onEdit={handleEdit}
              onDelete={handleDelete} />
          </Grid>
        </Grid>

        
      </main>
    </ThemeContextProvider>
  );
};

export default App;

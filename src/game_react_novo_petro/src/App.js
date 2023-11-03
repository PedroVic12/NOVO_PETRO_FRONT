import React from 'react';
import NavigationController from './app/src/controllers/navigation/NavigationController';
import { Button } from 'react-bootstrap'; // Componente do Bootstrap
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";

function App() {
  return (
    <div className='app'>
      <h1>GAME REACT WITH JAVASCRIPT</h1>
      <Button variant="primary">Bootstrap Button</Button>
      <NavigationController />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Remova o "as Router"
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import Pagina1 from './app/src/views/Screens/pages/Page1';
import HomePageScreen from './app/src/views/homepage/HomePage';
import Pagina2 from './app/src/views/Screens/pages/Page2';

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <header>
        <button onClick={toggleDrawer}>Open Drawer</button>
        <nav>
          <Link to="/">HomePage</Link>
          <Link to="/page1">Pagina 1</Link>
          <Link to="/page2">Pagina 2</Link>
        </nav>
      </header>

      <Drawer open={openDrawer} onClose={toggleDrawer}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="HomePage" />
          </ListItem>
          <ListItem button component={Link} to="/page1">
            <ListItemText primary="Pagina 1" />
          </ListItem>
          <ListItem button component={Link} to="/page2">
            <ListItemText primary="Pagina 2" />
          </ListItem>
        </List>
      </Drawer>

      <main>
        <BrowserRouter> {/* Use o BrowserRouter diretamente */}
          <Routes>
            <Route path="/" element={<HomePageScreen />} />
            <Route path="/page1" element={<Pagina1 />} />
            <Route path="/page2" element={<Pagina2 />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;

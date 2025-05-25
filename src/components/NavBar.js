import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Chip } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const categories = ['Vegan', 'Quick Meals', 'Baking', 'Holiday'];

export default function NavBar() {
  const nav = useNavigate();
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ mb: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => nav('/')}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, cursor: 'pointer' }} onClick={() => nav('/')}>
            FoodieBlog
          </Typography>
        </Box>
        <Box>
          {['Home','Blog','Recipes','Shop'].map(l => (
            <Button key={l} onClick={() => nav(l.toLowerCase())}>{l}</Button>
          ))}
          <IconButton sx={{ ml: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Box sx={{ px: 2, py: 1, overflowX: 'auto' }}>
        {categories.map(c => <Chip key={c} label={c} clickable sx={{ mr: 1 }} />)}
      </Box>
    </AppBar>
  );
}
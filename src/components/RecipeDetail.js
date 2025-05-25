import React from 'react';
import { Box, Typography, Divider, Grid, CardMedia, Button } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

export default function RecipeDetail({ recipes }) {
  const { id } = useParams();
  const nav = useNavigate();
  const r = recipes.find(x => x.id === +id);
  return (
    <Box sx={{ my: 4 }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => nav('/recipes')}>
        Back to Recipes
      </Button>
      <CardMedia component="img" height="360" image={r.img} alt={r.title} sx={{ borderRadius: 2, boxShadow: 2, mt: 2 }} />
      <Typography variant="h1" sx={{ mt: 3 }}>{r.title}</Typography>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Ingredients</Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {r.ingredients.map((i, idx) => <li key={idx}><Typography>{i}</Typography></li>)}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Instructions</Typography>
          <Box component="ol" sx={{ pl: 2 }}>
            {r.steps.map((s, idx) => <li key={idx}><Typography sx={{ mb: 1 }}>{s}</Typography></li>)}
          ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
); }

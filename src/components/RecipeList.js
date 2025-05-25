import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

function RecipeList({ recipes }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        All Recipes
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {recipe.title}
                  </Link>
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {recipe.cuisine}
                </Typography>
                <Typography variant="body2" component="p">
                  {recipe.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeList; 
import React from 'react';
import { Box, Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = styled(Box)(({ theme }) => ({
  height: '60vh',
  background: 'url(/images/kofta-hero.jpg) center/cover no-repeat',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  '&::after': { content: '""', position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }
}));

export default function HomePage({ recipes }) {
  const nav = useNavigate();
  const featured = recipes.slice(0, 2);
  return (
    <>
      <Hero>
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h1">Artikay Kofta</Typography>
          <Typography variant="subtitle1">A healthy twist on kofta with no onions or potatoes</Typography>
          <Button variant="contained" color="secondary" onClick={() => nav('/recipes/1')}>
            View Recipe
          </Button>
        </Container>
      </Hero>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h2">Featured Recipes</Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={4}>
          {featured.map(r => (
            <Grid item xs={12} sm={6} md={4} key={r.id}>
              <Card onClick={() => nav(`/recipes/${r.id}`)} sx={{ cursor: 'pointer', '&:hover': { transform: 'scale(1.03)' }, transition: '0.3s' }}>
                <CardMedia component="img" height="220" image={r.img} alt={r.title} />
                <CardContent>
                  <Typography variant="h3">{r.title}</Typography>
                  <Typography variant="subtitle1">Serves: {r.serves}</Typography>
                  <Typography variant="subtitle1">{r.desc}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" endIcon={<ArrowForwardIcon />}>View</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
); }

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AddRecipeForm({ onAdd }) {
  const nav = useNavigate();
  const [form, setForm] = useState({ title: '', img: '', serves: '', prep: '', cook: '', desc: '', ingredients: [''], steps: [''] });

  const handleChange = (k, v) => setForm({ ...form, [k]: v });
  const handleArrayChange = (k, idx, v) => {
    const arr = [...form[k]]; arr[idx] = v;
    setForm({ ...form, [k]: arr });
  };
  const addField = k => setForm({ ...form, [k]: [...form[k], ''] });

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({ id: Date.now(), ...form });
    nav('/recipes');
  };

  return (
    <Box component="form" sx={{ maxWidth: 600, mx: 'auto', mt: 4 }} onSubmit={handleSubmit}>
      <Typography variant="h1" gutterBottom>Add New Recipe</Typography>
      {['title','img','serves','prep','cook','desc'].map(key => (
        <TextField
          key={key}
          label={key.charAt(0).toUpperCase()+key.slice(1)}
          fullWidth margin="normal"
          value={form[key]}
          onChange={e => handleChange(key, e.target.value)}
        />
      ))}

      <Typography variant="h2" sx={{ mt: 2 }}>Ingredients</Typography>
      {form.ingredients.map((ing, i) => (
        <TextField
          key={i}
          fullWidth margin="dense"
          placeholder={`Ingredient ${i+1}`}
          value={ing}
          onChange={e => handleArrayChange('ingredients', i, e.target.value)}
        />
      ))}
      <Button onClick={() => addField('ingredients')} sx={{ mt: 1 }}>+ Add Ingredient</Button>

      <Typography variant="h2" sx={{ mt: 2 }}>Steps</Typography>
      {form.steps.map((step, i) => (
        <TextField
          key={i}
          fullWidth margin="dense"
          placeholder={`Step ${i+1}`}
          value={step}
          onChange={e => handleArrayChange('steps', i, e.target.value)}
        />
      ))}
      <Button onClick={() => addField('steps')} sx={{ mt: 1 }}>+ Add Step</Button>

      <Box sx={{ mt: 4 }}>
        <Button type="submit" variant="contained" sx={{ mr: 2 }}>Save</Button>
        <Button onClick={() => nav('/recipes')}>Cancel</Button>
      </Box>
    </Box>
); }

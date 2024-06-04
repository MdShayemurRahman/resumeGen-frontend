import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';

const RemoveButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '50%',
  minWidth: 'auto',
  padding: '6px',
}));

export const SkillField = ({ skills, onChange, onRemove, onAdd }) => (
  <Grid item xs={12}>
    <Paper elevation={3}>
      <Box p={3}>
        <Typography variant='h6' sx={{ mb: 3 }}>
          Skills
        </Typography>
        <Grid container spacing={2}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ mb: 1 }}>
              <Grid container spacing={1} alignItems='center'>
                <Grid item xs>
                  <TextField
                    fullWidth
                    label={`Skill ${index + 1}`}
                    value={skill}
                    onChange={(e) => onChange(e, index, 'skills')}
                  />
                </Grid>
                <Grid item>
                  <RemoveButton size='small' onClick={() => onRemove(index)}>
                    <DeleteIcon />
                  </RemoveButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Button variant='outlined' onClick={onAdd} sx={{ mt: 1 }}>
          Add Skill
        </Button>
      </Box>
    </Paper>
  </Grid>
);

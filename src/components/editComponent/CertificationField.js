import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Paper,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

export const CertificationField = ({
  certifications,
  onChange,
  onRemove,
  onAdd,
  isMobile,
}) => {
  return (
    <Grid item xs={12}>
      <Paper elevation={isMobile ? 1 : 3}>
        <Box p={{ xs: 2, sm: 3 }}>
          <Typography
            variant={isMobile ? 'subtitle1' : 'h6'}
            sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}
          >
            Certifications
          </Typography>

          {certifications.map((cert, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Certification Name'
                    value={cert.name}
                    onChange={(e) =>
                      onChange(e, index, 'certifications', 'name')
                    }
                    size={isMobile ? 'small' : 'medium'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Issuer'
                    value={cert.issuer}
                    onChange={(e) =>
                      onChange(e, index, 'certifications', 'issuer')
                    }
                    size={isMobile ? 'small' : 'medium'}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Date'
                    value={cert.date}
                    onChange={(e) =>
                      onChange(e, index, 'certifications', 'date')
                    }
                    placeholder='Month YYYY'
                    size={isMobile ? 'small' : 'medium'}
                  />
                </Grid>
                <Grid item xs={12}>
                  <IconButton
                    onClick={() => onRemove(index)}
                    color='error'
                    sx={{ mt: 1 }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}

          <Button
            startIcon={<AddIcon />}
            onClick={onAdd}
            variant='outlined'
            size={isMobile ? 'small' : 'medium'}
          >
            Add Certification
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

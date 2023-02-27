import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
import Grid from '@mui/material/Grid';
import theme from '../../theme';
import { ThemeProvider } from '@mui/material';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Manage Students
      </Typography>
      <Typography variant="body2">
       This will help you manage students.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    // <Box sx={{ minWidth: 10, width: 400}}>
    //   <Card variant="outlined">{card}</Card>
    // </Box>
    <ThemeProvider theme={theme}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
     <Grid><Card sx={{ minWidth: 300}} variant="elevation">{card}</Card></Grid>  
     <Grid><Card sx={{ minWidth: 300}} variant="outlined">{card}</Card></Grid>
     <Grid><Card sx={{ minWidth: 300}} variant="outlined">{card}</Card></Grid>
    </Grid>
    </ThemeProvider>
  );
}
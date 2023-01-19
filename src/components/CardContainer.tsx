import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import Divider from '@mui/material/Divider';
import ActionAreaCard from './ActionAreaCard';
import { Grid } from '@mui/material';

type ContainerProps ={
    width: number;
    height: number;
}
 const ContainerWrapper = styled.div({

   width: 1000, 
   height: 700,
   border: 1,
   borderColor: 'red'

  
  
  
 })

   const ArticleContainer = styled.div({
    width: '100%',
    spacing: 2,


   })
 



export default function CardContainer() {
  return (
    <React.Fragment>
     
      <ContainerWrapper >
        <Box sx={{ bgcolor: '#cfe8fc' }} />
        <Typography align="left" variant="h6" mb={3} p={3}>
            Filter by keywords
        </Typography>
        
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 } }
    >
       <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase 
        sx={{ ml: 1, flex: 1 }}
        placeholder="The most successful IT companies in 2020"
        inputProps={{ 'aria-label': 'search input' }}
      />
     
      
      </Paper>

      <Typography align="left" variant="h6" mt={5} p={3}>
            Results:
        </Typography>
        <Divider />

    <ArticleContainer >
    
      <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' } }mb={3}>
        <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>
        
          <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>

          <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>
          <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>
          <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>
          <Grid container mx={1} p={3}>
          <ActionAreaCard />
          </Grid>

      </Box>
    
      </ArticleContainer>
          
      </ContainerWrapper>
    </React.Fragment>
  );
}
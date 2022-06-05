import React from 'react';
import Card from '../components/card/ccard'
import ChefData from './chefData';
import { Grid } from '@mui/material';
import styled from 'styled-components';

const SubHeading = styled.div`
  align-self:flex-end;
  font-size: 40px;
  color: #710193;

  font-weight:600;

  @media screen and (max-width: 1324px) {  
    font-size:40px;
  }
 
`;

const Content = styled.p`
  font-family: "metropolis-regular", sans-serif;
  font-size: 25px;
  color: rgba(85, 85, 85, 0.95);

  @media screen and (max-width: 1324px) {  
    font-size:20px;
  }
 
`;

function createCard(ChefData) {
    return (
      <Grid item xs={2} sm={4} md={4}>
      <Card
        
        imagesrc={ChefData.imgsrc}
        name={ChefData.name}
        description={ChefData.desc}
         
      />
      </Grid>
    );
  }

function team() {
    return (
        <div className='App'>
            <SubHeading> Our Chefs</SubHeading>
            <Content> Meet the talented Chefs whose home cooked food will leave you wanting more...</Content>
           
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}  align='center'>
            {ChefData.map(createCard)}
            </Grid>
     
            
                        
        </div>
    );
}

export default team
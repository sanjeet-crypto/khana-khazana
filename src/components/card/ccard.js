import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardActions } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #000000;
  font-weight: 600;
  border-radius: 20px;
  background-color: #fea904;
  border: 2px solid #490055;
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #fff;
    
  }

  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto",
    overflow: "hidden",
    
  },
  media: {
    height: 400,
  },

  btnaction:{
    justifyContent: "center"
  },

  cardactionarea: {
    backgroundColor: "#F6F6F6",
  }
});

export default function Pcard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardactionarea}>
        <CardMedia
          className={classes.media}
          image={props.imagesrc}
          title="daffodil"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnaction}>
        <Link href={props.links}>
          <Button>
            Order Now 
          </Button>
        </Link>
      </CardActions>
    </Card>

    
  );
}
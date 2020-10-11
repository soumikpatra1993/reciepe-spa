import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const MenuCard = ({dish:{strMeal,strMealThumb}}) => {

    const useStyles = makeStyles({
        root: {
         width: 200,
          flexShrink : 0,
          margin: 10,
          cursor: 'pointer',
          '&:hover': {
            background: 'rgba(0,0,0,0.3)',
         }
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        media: {
          height: 10,
          paddingTop: '56.25%', // 16:9
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });
      const classes = useStyles();
      return(
        <Card 
        className={classes.root}>
             <CardMedia
        className={classes.media}
        image= {strMealThumb}
        title='j'
      />
         <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
      {strMeal}
        </Typography>
      </CardContent>
      </Card>
      )

}
export default MenuCard
import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const CategoryCard = ({category}) => {

  
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
    console.log(category)
    return (
        <Card 
        className={classes.root}>
             <CardMedia
        className={classes.media}
        image={category.strCategoryThumb}
        title={category.strCategory}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
      {category.strCategory}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        </Typography>
      </CardContent>
    </Card>
    )
}


export default CategoryCard

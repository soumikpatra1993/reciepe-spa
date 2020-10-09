import React,{useState , useEffect}  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'

const CategoryCard = ({category, handleCategory ,chosenCategory}) => {

    const [colored,setColor] =  useState('default')

    useEffect(() => {
      if(category.color) {
        setColor(category.color)
      }
    },[category , category.color])

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
    return (
      <Link to = {`/${category.strCategory}`}>
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
      <CardActions disableSpacing>
        <IconButton color= {colored}aria-label="add to favorites"
            onClick={() => { 
              colored === 'default' ? setColor('secondary'): setColor('secondary')
              let color =  colored === 'default' ? 'secondary' :'default'
              handleCategory(category , color)}}>
          <FavoriteIcon />
        </IconButton>
        </CardActions>
    </Card>
    </Link>
    )
}


export default CategoryCard

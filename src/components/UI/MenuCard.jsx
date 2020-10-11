import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const MenuCard = ({ dish: { strMeal, strMealThumb,
  strCategory,
  strInstructions,strArea } }) => {

  const [expanded, setExpanded] = React.useState(false);
  const useStyles = makeStyles((theme) => ({
    root: {
      width: strInstructions ? 400 : 200,
      justifyContent: strInstructions ? 'space-between' : 'flex-start',
      flexShrink: 0,
      margin: 10,
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(0,0,0,0.3)',
      }
    },
    flex: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    flexCol: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 45
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
    item: {
      fontSize: 12
    },
    pos: {
      marginBottom: 12,
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderReciepeDetail = () => {
    if (strInstructions) {
      return (
        <React.Fragment>
          <CardContent className={classes.flex}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Category : {strCategory}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Origin : {strArea}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                {strInstructions}
              </Typography>
            </CardContent>
          </Collapse>
        </React.Fragment>
      )
    }
  }
  const classes = useStyles();
  return (
    <Card
      className={classes.root}>
      <CardMedia
        className={classes.media}
        image={strMealThumb}
        title={strMeal}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {strMeal}
        </Typography>
      </CardContent>
      {renderReciepeDetail()}
    </Card>
  )

}
export default MenuCard
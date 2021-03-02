import React from 'react';
import {Card, CardMedia, CardContent,cardActions,Typography,IconButton} from '@material-ui/core';
//import withStyles from "material-ui/styles/withStyles";
import { AddShoppingCart} from '@material-ui/icons';
//import classes from '*.module.css';
import useStyles from './style';
const Prodcut=({prodcut})=>
{
    const classes= useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={prodcut.image} title={prodcut.name} />
            <CardContent>
                <div  className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {prodcut.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {prodcut.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{prodcut.description}</Typography>
            </CardContent>
            <cardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
            </cardActions>
        </Card>
    )

}
export default Prodcut;
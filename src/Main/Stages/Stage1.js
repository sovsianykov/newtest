import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '100px auto'  ,
    },
    media: {
        height: 350,
    },
});



export default function Stage1(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image= {props.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        stage1
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}

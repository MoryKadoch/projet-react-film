import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import Rating from './Rating';

function MovieDetails({ title, director, synopsis, rating }) {
    const intRating = Math.round(rating);
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Rating value={intRating} />
                <Typography color="textSecondary">
                    {director}
                </Typography>
                <Typography variant="body2" component="p">
                    {synopsis}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MovieDetails;

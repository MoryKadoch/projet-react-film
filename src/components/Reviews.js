import React from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import Rating from './Rating';

function Reviews({ reviews }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2">
                    Avis
                </Typography>
                {reviews.map((review, index) => (
                    <Typography key={index} variant="body2" component="p">
                        {review.reviewer} : {review.content} <Rating value={review.rating} />
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}

export default Reviews;

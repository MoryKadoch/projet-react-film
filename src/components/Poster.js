import React from 'react';
import { Card, CardMedia } from '@material-ui/core';

function Poster({ image }) {
  return (
    <Card>
      <CardMedia image={image} style={{ height: "500px" }} />
    </Card>
  );
}

export default Poster;

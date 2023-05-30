import React from 'react';
import { Typography, List, ListItem, ListItemText, Card, CardContent } from '@material-ui/core';

function Actors({ actors }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Acteurs</Typography>
        <List>
          {actors.map((actor, index) => (
            <ListItem key={index}>
              <ListItemText primary={actor.name} secondary={actor.character} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Actors;

import { Typography } from '@material-ui/core';

function Rating({ value }) {
    const array = [];
    
    const char = '★';
    const charEmpty = '☆';

    for (let i = 0; i < value; i++) {
        array.push(char);
    }

    for (let i = 0; i < 5 - value; i++) {
        array.push(charEmpty);
    }

    return (
        <Typography variant="h5" component="h2">
            {array.join('')}
        </Typography>
    );
}

export default Rating;

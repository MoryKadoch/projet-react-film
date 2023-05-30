import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        Tp React
                    </Link>
                </Typography>
                <Button color="inherit">
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                        Film
                    </Link>
                </Button>
                <Button color="inherit">
                    <Link to="/questions" style={{ textDecoration: "none", color: "white" }}>
                        Questions
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
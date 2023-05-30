// footer of the page with material-ui
import { Typography, AppBar, Toolbar } from '@material-ui/core';

function Footer() {
    return (
        <AppBar position="static" style={{ top: "auto", bottom: "0" }}>
            <Toolbar>
                <Typography variant="body1" style={{ flexGrow: "1" }}>
                    © {new Date().getFullYear()} - Tp React
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
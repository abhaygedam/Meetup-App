import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom";


function Navbar() {
    let history = useHistory();
    return (
        <div>
           <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Meetup App
          </Typography>
                        <Button color="inherit" onClick={() => {
                            history.push("/signup")
                        }}>Signup</Button>
                         <Button color="inherit" onClick={() => {
                            history.push("/create")
          }}>Create Meet</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
}

export default Navbar;
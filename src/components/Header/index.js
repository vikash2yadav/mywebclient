import React from 'react'
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { component: 'Home', route: "/" },
  // { component: "Project", route: '/projects' },
  // { component: "Service", to: '#service' },
  //  {component:"About", to:'#about'},
  //  {component:"Work"},
  //  {component:"Skill"}
]

const Header = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/"> Web Developer</Link>
        {/* <img className='h-20 w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcmyQ8qxnzmMCy4TiW9uPnFmRZupoowfhzFVyWP4voA&s" alt="" /> */}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.component} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#474F7A' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* <img className='h-10 w-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBcmyQ8qxnzmMCy4TiW9uPnFmRZupoowfhzFVyWP4voA&s" alt="" /> */}
            <Link
              style={{ fontFamily: "cursive" }}
              to="/"> Web Developer </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
            {navItems.map((item) => (

              <Button onClick={() => {
                navigate(item.route)
              }} key={item} style={{ color: '#fff' }} >
                {item.component}
              </Button>

            ))}

            <button 
            className=' mx-3 px-10 py-2 text-white hover:bg-white hover:text-gray-700'
            style={{border: "1px solid white",
            transition: 'all 0.5s'}}>Let`s Talk</button>
          </Box>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{}}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default Header
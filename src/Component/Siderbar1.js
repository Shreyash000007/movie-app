import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider
} from '@mui/material';
import ActionIcon from '@mui/icons-material/LocalMovies';
import AdventureIcon from '@mui/icons-material/Explore';
import ComedyIcon from '@mui/icons-material/EmojiEvents';
import DramaIcon from '@mui/icons-material/EmojiPeople';
import HorrorIcon from '@mui/icons-material/NoPhotography';
import RomanceIcon from '@mui/icons-material/Favorite';
import SciFiIcon from '@mui/icons-material/Science';
import ThrillerIcon from '@mui/icons-material/Whatshot';
import MysteryIcon from '@mui/icons-material/QuestionAnswer';
import AnimationIcon from '@mui/icons-material/Animation';

const drawerWidth = 240;

function ResponsiveDrawer() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <div>
        <Toolbar />
        <Typography
          variant="h6"
          noWrap
          sx={{
            px: 2,
            py: 1,
            textAlign: 'center',
            animation: 'fadeIn 2s ease-in-out',
            background: 'linear-gradient(45deg, #FF6F61, #D32F2F, #1976D2, #0288D1)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            WebkitBackgroundClip: 'text',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          FilmyGod
        </Typography>
        <Divider />
        <List>
          {[
            { text: 'Action', icon: <ActionIcon sx={{ color: '#FF6F61' }} />, link: '/action' },
            { text: 'Adventure', icon: <AdventureIcon sx={{ color: '#D32F2F' }} />, link: '/adventure' },
            { text: 'Comedy', icon: <ComedyIcon sx={{ color: '#1976D2' }} />, link: '/comedy' },
            { text: 'Drama', icon: <DramaIcon sx={{ color: '#0288D1' }} />, link: '/drama' },
            { text: 'Horror', icon: <HorrorIcon sx={{ color: '#7B1FA2' }} />, link: '/horror' },
            { text: 'Romance', icon: <RomanceIcon sx={{ color: '#C2185B' }} />, link: '/romance' },
            { text: 'Sci-Fi', icon: <SciFiIcon sx={{ color: '#0097A7' }} />, link: '/sci-fi' },
            { text: 'Thriller', icon: <ThrillerIcon sx={{ color: '#D84315' }} />, link: '/thriller' },
            { text: 'Mystery', icon: <MysteryIcon sx={{ color: '#C2185B' }} />, link: '/mystery' },
            { text: 'Animation', icon: <AnimationIcon sx={{ color: '#7B1FA2' }} />, link: '/animation' }
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default ResponsiveDrawer;

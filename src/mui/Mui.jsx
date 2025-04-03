import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { BsHouseDoorFill } from 'react-icons/bs';
import { BsCollectionFill } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';

export default function Mui() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const menuItems = [
    { text: 'Home', path: '/', icon: <BsHouseDoorFill /> },
    { text: 'Collection', path: '/collection', icon: <BsCollectionFill /> },
    { text: 'About Us', path: '/about', icon: <FaInfoCircle /> },
    { text: 'Contacts', path: '/contacts', icon: <AiFillPhone /> }
  ];

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, path, icon }) => (
          <ListItem className='text-red-600 font-semibold text-xl' key={text} disablePadding>
            <ListItemButton component={Link} to={path}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='block  lg:hidden  '>
      <Button onClick={toggleDrawer(true)}><FaBars /></Button>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
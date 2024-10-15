import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, Box, Typography, Menu, MenuItem, IconButton, Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [anchorElCourses, setAnchorElCourses] = useState(null);
  const [anchorElPages, setAnchorElPages] = useState(null);
  const [anchorElBlog, setAnchorElBlog] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenCoursesMenu = (event) => setAnchorElCourses(event.currentTarget);
  const handleOpenPagesMenu = (event) => setAnchorElPages(event.currentTarget);
  const handleOpenBlogMenu = (event) => setAnchorElBlog(event.currentTarget);

  const handleCloseCoursesMenu = () => setAnchorElCourses(null);
  const handleClosePagesMenu = () => setAnchorElPages(null);
  const handleCloseBlogMenu = () => setAnchorElBlog(null);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
          <ListItemText primary="Homepage" />
        </ListItem>
        <ListItem button component={Link} to="/about-us" onClick={toggleDrawer(false)}>
          <ListItemText primary="About Us" />
        </ListItem>
        
        {/* Courses Dropdown Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Courses</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem button component={Link} to="/courses/courses" onClick={toggleDrawer(false)}>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component={Link} to="/courses/course-details" onClick={toggleDrawer(false)}>
              <ListItemText primary="Course Details" />
            </ListItem>
            <ListItem button component={Link} to="/courses/health-sciences" onClick={toggleDrawer(false)}>
              <ListItemText primary="Health Sciences" />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        {/* Pages Dropdown Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Pages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem button component={Link} to="/pages/faculty" onClick={toggleDrawer(false)}>
              <ListItemText primary="Faculty" />
            </ListItem>
            <ListItem button component={Link} to="/pages/career" onClick={toggleDrawer(false)}>
              <ListItemText primary="Career" />
            </ListItem>
            <ListItem button component={Link} to="/pages/testimonials" onClick={toggleDrawer(false)}>
              <ListItemText primary="Testimonials" />
            </ListItem>
            <ListItem button component={Link} to="/pages/professional" onClick={toggleDrawer(false)}>
              <ListItemText primary="Professional" />
            </ListItem>
            <ListItem button component={Link} to="/pages/FAQ" onClick={toggleDrawer(false)}>
              <ListItemText primary="FAQ" />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        {/* Blog Dropdown Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Blog</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem button component={Link} to="/blog/single-blog" onClick={toggleDrawer(false)}>
              <ListItemText primary="Single Blog" />
            </ListItem>
            <ListItem button component={Link} to="/blog/blog" onClick={toggleDrawer(false)}>
              <ListItemText primary="Blog" />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <ListItem button component={Link} to="/pages/contact-us" onClick={toggleDrawer(false)}>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          boxShadow: 'none',
          zIndex: 1300,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'black', textDecoration: 'none' }}
              component={Link}
              to="/"
            >
              Bridge
            </Typography>
          </Box>

          {isMobile ? (
            <>
              {/* Hamburger Menu for Mobile */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Drawer */}
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            /* Desktop Menu Links */
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 600 }}>
                Homepage
              </Button>
              <Button color="inherit" component={Link} to="/about-us" sx={{ fontWeight: 600 }}>
                About Us
              </Button>

              {/* Courses Dropdown */}
              <Button
                color="inherit"
                sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}
                onClick={handleOpenCoursesMenu}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Courses
              </Button>
              <Menu
                anchorEl={anchorElCourses}
                open={Boolean(anchorElCourses)}
                onClose={handleCloseCoursesMenu}
                sx={{ mt: 2 }}
                MenuListProps={{
                  sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '8px 0',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleCloseCoursesMenu} component={Link} to="/courses/courses">
                  Courses
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu} component={Link} to="/courses/course-details">
                  Course Details
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu} component={Link} to="/courses/health-sciences">
                  Health Sciences
                </MenuItem>
              </Menu>

              {/* Pages Dropdown */}
              <Button
                color="inherit"
                sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}
                onClick={handleOpenPagesMenu}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Pages
              </Button>
              <Menu
                anchorEl={anchorElPages}
                open={Boolean(anchorElPages)}
                onClose={handleClosePagesMenu}
                sx={{ mt: 2 }}
                MenuListProps={{
                  sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '8px 0',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleClosePagesMenu} component={Link} to="/pages/faculty">
                  Faculty
                </MenuItem>
                <MenuItem onClick={handleClosePagesMenu} component={Link} to="/pages/career">
                  Career
                </MenuItem>
                <MenuItem onClick={handleClosePagesMenu} component={Link} to="/pages/testimonials">
                  Testimonials
                </MenuItem>
                <MenuItem onClick={handleClosePagesMenu} component={Link} to="/pages/professional">
                  Professional
                </MenuItem>
                <MenuItem onClick={handleClosePagesMenu} component={Link} to="/pages/FAQ">
                  FAQ
                </MenuItem>
              </Menu>

              {/* Blog Dropdown */}
              <Button
                color="inherit"
                sx={{ fontWeight: 600, display: 'flex', alignItems: 'center' }}
                onClick={handleOpenBlogMenu}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Blog
              </Button>
              <Menu
                anchorEl={anchorElBlog}
                open={Boolean(anchorElBlog)}
                onClose={handleCloseBlogMenu}
                sx={{ mt: 2 }}
                MenuListProps={{
                  sx: {
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    padding: '8px 0',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <MenuItem onClick={handleCloseBlogMenu} component={Link} to="/blog/single-blog">
                  Single Blog
                </MenuItem>
                <MenuItem onClick={handleCloseBlogMenu} component={Link} to="/blog/blog">
                  Blog
                </MenuItem>
              </Menu>

              <Button color="inherit" component={Link} to="/pages/contact-us" sx={{ fontWeight: 600 }}>
                Contact Us
              </Button>

              {/* "Join Us Now" Button */}
              <Button
                component={Link}
                to="/join"
                variant="contained"
                sx={{
                  backgroundColor: '#ff4081',
                  color: 'white',
                  fontWeight: 600,
                  padding: '8px 16px',
                  '&:hover': {
                    backgroundColor: '#ff70a3',
                  },
                }}
              >
                Join Us Now
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {/* Spacer for Fixed Navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;

import { Box, Typography, Button, Container, IconButton, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const FooterContainer = styled(Box)({
  backgroundColor: '#F3F4F6',
  padding: '40px 0',
  marginTop: '20px',
});

const Logo = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '20px',
});

const LinkItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#555',
  textDecoration: 'none',
  marginBottom: '8px',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const SubscribeInput = styled('input')({
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '100%',
  maxWidth: '300px',
});

const SubscribeButton = styled(Button)({
  backgroundColor: '#FF4081',
  color: '#fff',
  borderRadius: '5px',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: '#E91E63',
  },
});

const SocialMediaIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  '& > *': {
    margin: '0 10px',
  },
});

const Footer = () => {
  // Media query hook to make the layout responsive
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Logo>Bridge University</Logo>

        <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} justifyContent="space-between">
          {/* Quick Links */}
          <Box flex={1} marginBottom={isSmallScreen ? '20px' : '0'}>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              About Us
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Courses
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Private Policy
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              News & Articles
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Testimonials
            </LinkItem>
          </Box>

          {/* Course Categories */}
          <Box flex={1} marginBottom={isSmallScreen ? '20px' : '0'}>
            <Typography variant="h6" fontWeight="bold">Courses Category</Typography>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Engineering
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Business Studies
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Health Sciences
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Law & Legal Studies
            </LinkItem>
            <LinkItem>
              <ArrowForwardIosIcon sx={{ fontSize: '12px', marginRight: '8px' }} />
              Education Teaching
            </LinkItem>
          </Box>

          {/* Contact Info */}
          <Box flex={1} marginBottom={isSmallScreen ? '20px' : '0'}>
            <Typography variant="h6" fontWeight="bold">Address & Contact</Typography>
            <LinkItem>
              <LocationOnIcon sx={{ fontSize: '18px', marginRight: '8px' }} />
              Petakumbuh, Indonesia, 1234
            </LinkItem>
            <LinkItem>
              <PhoneIcon sx={{ fontSize: '18px', marginRight: '8px' }} />
              Call Us: (123) 234 1234
            </LinkItem>
            <Typography>Open Mon-Fri: 9 AM - 5 PM</Typography>
          </Box>
        </Box>

        {/* Subscribe Section */}
        <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center" justifyContent="space-between" marginTop="20px">
          <Typography variant="h6">Subscribe for Education Insights!</Typography>
          <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} alignItems="center" marginTop={isSmallScreen ? '10px' : '0'}>
            <SubscribeInput type="email" placeholder="Your Email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </Box>
        </Box>

        {/* Social Media Icons */}
        <SocialMediaIcons>
          <IconButton href="https://facebook.com" target="_blank">
            <FacebookIcon sx={{ color: '#3b5998' }} />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank">
            <TwitterIcon sx={{ color: '#00acee' }} />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank">
            <InstagramIcon sx={{ color: '#C13584' }} />
          </IconButton>
          <IconButton href="https://youtube.com" target="_blank">
            <YouTubeIcon sx={{ color: '#FF0000' }} />
          </IconButton>
        </SocialMediaIcons>

        <Typography textAlign="center" fontSize="14px" color="#999" marginTop="20px">
          Copyright © 2023 All Right Reserved Design by Abhishek Bhattacharjee
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

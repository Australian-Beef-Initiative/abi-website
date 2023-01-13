import React from 'react';
import {
  Box,
  Unstable_Grid2 as Grid,
  Button,
  ButtonGroup,
  useMediaQuery,
  Menu,
  MenuItem,
  IconButton,
} from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby'

export const Header = (props: any) => {
  const isTabletOrMobile = useMediaQuery('(max-width:1000px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MENU = [
    {
      label: 'Home',
      href: '/#home',
      useAnchor: true,
    },
    {
      label: 'Events',
      href: '/#events',
      useAnchor: true,
    },
    {
      label: 'Farms',
      href: '/#farms',
      useAnchor: true,
    },
    {
      label: 'Media',
      href: '/#media',
      useAnchor: true,
    },
    {
      label: 'Membership',
      href: '/#membership',
      useAnchor: true,
    },
    {
      label: 'Get Involved',
      href: '/#get-involved',
      useAnchor: true,
    },
    {
      label: 'Contact Us',
      href: '/#contact',
      useAnchor: true,
    },
    {
      label: 'International',
      href: '#international',
      useAnchor: true,
    },
  ];
  

  return (
    <Box sx={{ marginBottom: 5 }}>
      {isTabletOrMobile ? (
        <Grid container spacing={2}>
          <Grid xs={6}>
            <StaticImage src="../images/abi-logo-h300.png" alt="ABI logo" height={50} />
          </Grid>
          <Grid xs={6}>
            <Box display="flex" justifyContent="end">
              <IconButton
                id="menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Events</MenuItem>
                <MenuItem onClick={handleClose}>Farms</MenuItem>
                <MenuItem onClick={handleClose}>Media</MenuItem>
                <MenuItem onClick={handleClose}>Membership</MenuItem>
                <MenuItem onClick={handleClose}>Get Involved</MenuItem>
              </Menu>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid xs={3}>
            <StaticImage src="../images/abi-logo-h300.png" alt="ABI logo" width={300} />
          </Grid>
          <Grid xs={9}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <ButtonGroup variant="text" size="small" color="primary">
                {MENU.map((item) => {
                  if (item.useAnchor) {
                    return (
                      <Link key={item.href} to={item.href}>
                        <Button style={{ borderStyle: 'none' }} sx={{ p: 1 }}>
                          {item.label}
                        </Button>
                      </Link>
                    );
                  }
                  return (
                    <Button
                      key={item.href}
                      style={{ borderStyle: 'none' }}
                      href={item.href}
                      sx={{ p: 1 }}
                    >
                      {item.label}
                    </Button>
                  );
                })}
              </ButtonGroup>
            </div>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};


import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme';

const pages = [{
    id: 1,
    pagina : 'Produtos',
    url : '/'}, 
    {
    id: 2,
    pagina : 'Adicionar Produto',
    url : '/adicionar'}];

export default function Header() {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color="default" sx={{ backgroundColor: "#ECECED" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'primary.main',
                  '&:hover': {
                        color: 'primary.main',
                        },
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  background: 'none',
                  boxShadow: 'none',
                  textTransform: 'none',
                  minWidth: 0
                }}
            >
                Lojinha
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem
                        key={page.id}
                        component={Link}
                        to={page.url}
                        onClick={handleCloseNavMenu}
                        sx={{ textAlign: 'center',
                            color: 'primary.main',
                            '&:hover': {
                            color: 'primary.main',
                            },
                            textDecoration: 'none' }}
                    >
                        {page.pagina}
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Button
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'primary.main',
                  '&:hover': {
                        color: 'primary.main',
                        },
                  textDecoration: 'none',
                  fontSize: '1.25rem',
                  background: 'none',
                  boxShadow: 'none',
                  textTransform: 'none',
                  minWidth: 0
                }}
            >
                Lojinha
            </Button>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}>
                {pages.map((page) => (
                <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={page.url}
                    sx={{ my: 2,
                        color: 'primary.main',
                        '&:hover': {
                        color: 'primary.main',
                        },
                        display: 'block',
                        textTransform: 'none' }}
                >
                    {page.pagina}
                </Button>
                ))}
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
  );
}


import * as React from 'react';
import Helmet from 'react-helmet';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import { 
    CssBaseline,
    Box
} from '@mui/material';
import NavigationBar from '@/components/NavigationBar';
import SideBar from '@/components/SideBar';
import Copyright from '@/templates/Copyright';
import { AppConfig } from '@/templates/AppConfig';
import defaultTheme from './theme';

interface LayoutProps {
    children: React.ReactNode;
    title: string;
    notifications: string[];
}

export default function Layout(props:LayoutProps) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };

    return (
        <>
            <Helmet title={`${props.title} | ${AppConfig.title}`} />
            <ThemeProvider theme={defaultTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <NavigationBar {...props} open={open} toggleDrawer={toggleDrawer} />
                    <SideBar open={open} toggleDrawer={toggleDrawer} />
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        {props.children}
                        <Copyright />
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
}
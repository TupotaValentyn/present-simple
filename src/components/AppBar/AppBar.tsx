import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar as MUIAppBar, Avatar, Box, List, ListItem, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { useClasses } from 'components/AppBar/styles';
import { ROUTES } from 'config/routes/routes';

type Props = {};

const AppBar: FC<Props> = () => {
  const classes = useClasses();
  const headerRoutes = [{
    label: 'Dashboard',
    route: ROUTES.DASHBOARD
  }, {
    label: 'Analyze',
    route: ROUTES.ANALISE
  }, {
    label: 'Blog',
    route: ROUTES.BLOG
  }];

  const renderLink = (props: { route: ROUTES, label: string }) => {
    return <ListItem key={props.route}>
      <NavLink to={props.route} className={classes.noDecoration}>
        <Typography color="textPrimary" style={{ fontWeight: 500 }}>
          {props.label}
        </Typography>
      </NavLink>
    </ListItem>
  };

  return <MUIAppBar position="sticky" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Box className={classes.logo}>
        <NavLink to={ROUTES.DASHBOARD} style={{ textDecoration: 'none' }}>
          <Typography variant="h5" color="primary" style={{ fontWeight: 500 }}>
            DEFEND PHISH
          </Typography>
        </NavLink>
        {/*<img src={logo} alt="LOGO" />*/}
      </Box>
      <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="center" mr={3}>
        <Box mr={3}>
          <List className={classes.navList}>
            {headerRoutes.map(renderLink)}
          </List>
        </Box>
        {/*<Box>*/}
        {/*  <ThemeToggler />*/}
        {/*</Box>*/}
      </Box>

      <Box display="flex" alignItems="center">
        <Box mr={1}>
          <Avatar
            src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" />
        </Box>
        <Typography variant="subtitle1" color="textPrimary">
          Ann Warren
        </Typography>
      </Box>
    </Toolbar>
  </MUIAppBar>
};

export default AppBar

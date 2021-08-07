import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar as MUIAppBar, Avatar, Box, List, ListItem, Typography } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { useClasses } from 'components/AppBar/styles';
import ThemeToggler from 'components/ThemeToggler';
import { ROUTES } from 'config/routes/routes';

type Props = {};

const AppBar: FC<Props> = () => {
  const classes = useClasses();
  const headerRoutes = [{
    label: 'Dashboard',
    route: ROUTES.DASHBOARD
  }, {
    label: 'Analise',
    route: ROUTES.ANALISE
  }, {
    label: 'Blog',
    route: ROUTES.BLOG
  }];


  const renderLink = (props: { route: ROUTES, label: string }) => {
    return <ListItem key={props.route}>
      <NavLink to={props.route} className={classes.noDecoration}>
        <Typography color="textSecondary">
          {props.label}
        </Typography>
      </NavLink>
    </ListItem>
  };

  return <MUIAppBar position="sticky">
    <Toolbar className={classes.toolbar}>
      <Box className={classes.logo}>
        LOGO
      </Box>
      <Box display="flex" justifyContent="flex-end" flexGrow={1} alignItems="center" mr={3}>
        <Box mr={3}>
          <List className={classes.navList}>
            {headerRoutes.map(renderLink)}
          </List>
        </Box>
        <Box>
          <ThemeToggler />
        </Box>
      </Box>

      <Box display="flex">
        <Box display="flex" flexDirection="column" mr={2}>
          <Typography variant="subtitle1" color="textSecondary">
            John Doe
          </Typography>

          <Typography variant="caption" color="textSecondary">
            Available
          </Typography>
        </Box>
        <Avatar src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" />
      </Box>
    </Toolbar>
  </MUIAppBar>
};

export default AppBar

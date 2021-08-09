import React, { FC } from 'react';
import { BrowserRouter, Route, RouteProps, Switch, } from 'react-router-dom';
import { commonRoutes, privatRoutes } from 'config/routes/routes';
import { AppBar } from 'components/index';

type Props = {}

type RouteType = 'common' | 'privat';

const renderRoute = (type: RouteType) => (route: RouteProps) => {
  return <Route key={`${type}-${route.path}`} {...route} />
}

const renderCommonRoute = renderRoute('common');
const renderPrivatRoute = renderRoute('privat');

const Router: FC<Props> = () => {
  return <BrowserRouter>
    <AppBar />
    <Switch>
      {/*{commonRoutes.map(renderCommonRoute)}*/}
      {privatRoutes.map(renderPrivatRoute)}
    </Switch>
  </BrowserRouter>
};

export default Router

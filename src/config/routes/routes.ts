import { RouteProps } from 'react-router-dom';
import { Dashboard, Login, Blog, Analise } from 'pages';

export enum ROUTES {
  DASHBOARD = '/',
  LOGIN = '/login',
  BLOG = '/blog',
  ANALISE = '/analise',
  REGISTRATION = '/registration',
  PAGE_1 = '/page1',
  NOT_FOUND = '/not-found',
  SOMETHING_WENT_WRONG = '/something-went-wrong'
}

export const privatRoutes: RouteProps[] = [
  {
    component: Dashboard,
    path: ROUTES.DASHBOARD,
    exact: true
  }, {
    component: Blog,
    path: ROUTES.BLOG,
    exact: true
  }, {
    component: Analise,
    path: ROUTES.ANALISE,
    exact: true
  }
];

export const commonRoutes: RouteProps[] = [{
  component: Login,
  path: ROUTES.LOGIN,
  exact: true
}]

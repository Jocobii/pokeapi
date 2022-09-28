import { lazy } from 'react';

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../common/layout/LazyLayout'));

const routes = [
  {
    path: '/pokemon/*',
    to: '/pokemon/',
    Component: LazyLayout,
    name: 'Pokemon',
  },
];

export default routes;

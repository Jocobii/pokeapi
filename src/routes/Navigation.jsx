import React, { Suspense } from 'react';
import {
  Routes,
  Route,
  NavLink,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import routes from './routes';
import logo from '../logo.svg';

// path: '/pokemon/*',
//     to: '/pokemon/',
//     Component: LazyLayout,
//     name: 'Pokemon',
function Navigation() {
  console.log(routes);
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {' '}
                    {name}
                    {' '}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, path }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default Navigation;

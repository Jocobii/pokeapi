import React, { Suspense } from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import routes from './routes';

function Navigation() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <div className="main-layout">
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

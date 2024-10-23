import routesConfig from 'config/Routes';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routesConfig.map(({ path, element: Element }, index) => (
        <Route key={index} path={path} element={<Element />} />
      ))}
    </Routes>
  );
};

export default AppRoutes;

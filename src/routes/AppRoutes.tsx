import routesConfig from 'config/IRoutes';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

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

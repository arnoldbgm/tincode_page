import React from 'react';
import { Outlet } from 'react-router-dom';

const WebLayout = () => {
  return (
    <div>
      <h2>Inicio del WebLayout</h2>
      <Outlet />
    </div>
  );
};

export default WebLayout;

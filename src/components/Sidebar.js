import React from 'react';

function Sidebar({ children }) {
  return (
    <nav className="col-md-3 d-none d-md-block">
      {children}
    </nav>
  );
}

export default Sidebar;

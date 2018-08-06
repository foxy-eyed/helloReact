import React from 'react';
import { NavLink as Navigation } from 'react-router-dom';

export default(props) => {
  const { children } = props;
  return (
    <Navigation {...props} className="nav-link" activeClassName="active">
      {children}
    </Navigation>
  );
};

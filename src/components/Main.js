import React from 'react';

function Main({ children }) {
  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-9 px-4">
      {children}
    </main>
  );
}

export default Main;

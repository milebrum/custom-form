import React from 'react';

interface LayoutProps {
    children: JSX.Element[];
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;

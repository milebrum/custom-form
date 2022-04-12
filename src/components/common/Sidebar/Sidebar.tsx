import React from 'react';

interface SidebarProps {
  children: JSX.Element[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

export default Sidebar;

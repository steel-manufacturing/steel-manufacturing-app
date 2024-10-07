import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Steel Manufacturing</h1>
        {/* Add your navigation here */}
      </header>
      <main>{children}</main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Steel Manufacturing. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;

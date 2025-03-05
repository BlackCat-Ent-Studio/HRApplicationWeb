import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div>
      <header>
        {/* Header content */}
      </header>
      <main>{children}</main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
} 
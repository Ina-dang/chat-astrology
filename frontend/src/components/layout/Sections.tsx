import React from 'react';

interface SectionsProps {
  children: React.ReactNode;
}

const Sections: React.FC<SectionsProps> = ({ children }) => {
  return <section className="Sections" id="main-content">{children}</section>;
};

export { Sections };

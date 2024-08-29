import React from 'react';

interface SectionsProps {
  children: React.ReactNode;
}

const Sections: React.FC<SectionsProps> = ({ children }) => {
  return <section className="Sections">{children}</section>;
};

export { Sections };

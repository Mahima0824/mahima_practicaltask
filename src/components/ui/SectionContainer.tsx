import React from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
};

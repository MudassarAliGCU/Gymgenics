import React from 'react'

const SectionHeader = ({ children, theme = "dark", size = "2" }) => {
  return (
    <h2 className={`text-${size}xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-black"}`}>
      {children}
    </h2>
  );
};

export default SectionHeader

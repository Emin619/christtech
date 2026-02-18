import React from 'react';

const IndustrialScene: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fcfcfc]">
      {/* Blueprint Grid - Now using a CSS class to fix the linter error */}
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      
      {/* Soft Vignette to clean up the edges and focus the center */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcfc] via-transparent to-[#fcfcfc]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fcfcfc]/50" />
    </div>
  );
};

export default IndustrialScene;
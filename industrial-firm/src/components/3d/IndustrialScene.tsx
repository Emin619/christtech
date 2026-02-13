import React from 'react';

const IndustrialScene: React.FC = () => {
  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
         
      />
      <div className="absolute inset-0 bg-industrial-navy/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-industrial-navy/50 to-industrial-navy" />
    </div>
  );
};

export default IndustrialScene;

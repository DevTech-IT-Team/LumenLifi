import React from 'react';

export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-sm font-bold tracking-wider text-xs uppercase transition-all duration-300";
  const variants = {
    primary: "bg-[#E35325] text-white hover:bg-[#C24114] glow-effect",
    secondary: "bg-[#151D30] text-white hover:bg-opacity-80 border border-gray-800",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ children, className = "" }) => (
  <div className={`bg-[#151D30] border border-gray-800/60 p-6 rounded-sm hover:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);
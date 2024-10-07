import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const hasCustomPadding = className?.includes('p-');

  return (
    <div className={`bg-light-card dark:bg-dark-card w-full rounded-default shadow-tremor-card dark:shadow-dark-card ${!hasCustomPadding ? 'p-6' : ''} ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;

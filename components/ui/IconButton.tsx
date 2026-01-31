import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label?: string;
  badge?: number;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  badge,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`relative p-2 hover:bg-gray-100 rounded-md transition-colors ${className}`}
      aria-label={label}
      {...props}
    >
      {icon}
      {badge !== undefined && badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  );
};

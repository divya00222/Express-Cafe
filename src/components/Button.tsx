import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "text" | "white";
  size?: "sm" | "md" | "lg";
  to?: string;
  isExternal?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  isExternal = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold rounded-lg transition-colors duration-200 cursor-pointer text-center";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
    secondary: "bg-teal-dark text-white hover:bg-primary-dark hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
    text: "text-primary hover:text-primary-light focus-visible:underline p-0",
    white: "bg-white text-text-primary hover:bg-background-soft focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary shadow-sm border border-border-light",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm tracking-wide",
    lg: "px-8 py-4 text-base tracking-wide",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    if (isExternal) {
      return (
        <motion.a
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={combinedStyles}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

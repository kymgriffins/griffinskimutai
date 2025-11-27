"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "subtle";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: "bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "border border-white/12 text-white hover:border-white/25 hover:bg-white/5",
    subtle: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const MotionComponent = motion.button;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: variant === "primary" ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      whileHover={{ scale: variant === "primary" ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}

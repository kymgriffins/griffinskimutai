"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "hoverable" | "elevated";
  className?: string;
  onClick?: () => void;
}

export function Card({
  children,
  variant = "default",
  className = "",
  onClick,
}: CardProps) {
  const baseClasses = "rounded-2xl p-8 transition-all duration-300";

  const variantClasses = {
    default: "bg-white/5 border border-white/12",
    hoverable: "bg-white/5 border border-white/12 hover:bg-white/10 hover:scale-[1.02] cursor-pointer",
    elevated: "bg-white text-black p-8 rounded-[32px] shadow-2xl",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const MotionComponent = motion.div;

  return (
    <MotionComponent
      className={classes}
      onClick={onClick}
      whileHover={variant === "hoverable" ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </MotionComponent>
  );
}

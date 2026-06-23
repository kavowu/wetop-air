import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] cursor-pointer",
          // Variants
          variant === 'default' && "bg-primary text-white hover:bg-primary/95 shadow-md shadow-primary/10",
          variant === 'destructive' && "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
          variant === 'outline' && "border border-input bg-background text-foreground hover:bg-muted hover:text-foreground shadow-sm",
          variant === 'secondary' && "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
          variant === 'ghost' && "hover:bg-muted hover:text-foreground",
          variant === 'link' && "text-primary underline-offset-4 hover:underline",
          // Sizes
          size === 'default' && "h-10 px-4 py-2",
          size === 'sm' && "h-9 rounded-md px-3 text-xs",
          size === 'lg' && "h-11 rounded-md px-8 text-base font-semibold",
          size === 'icon' && "h-10 w-10",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

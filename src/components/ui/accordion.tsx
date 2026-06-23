import React, { createContext, useContext, useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AccordionContextType {
  selectedValue: string | null;
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  className,
  type = "single",
  collapsible = true,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "single";
  collapsible?: boolean;
}) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setSelectedValue((prev) => (prev === value ? (collapsible ? null : prev) : value));
  };

  return (
    <AccordionContext.Provider value={{ selectedValue, toggleItem }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be used inside Accordion");
  const isOpen = context.selectedValue === value;

  return (
    <div
      className={cn(className)}
      data-state={isOpen ? "open" : "closed"}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value } as any);
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  children,
  className,
  value,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
  [key: string]: any;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionTrigger must be used inside Accordion");
  const isOpen = context.selectedValue === value;

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 cursor-pointer",
        className
      )}
      onClick={() => value && context.toggleItem(value)}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 text-gray-500" />
    </button>
  );
}

export function AccordionContent({
  children,
  className,
  value,
}: {
  children: React.ReactNode;
  className?: string;
  value?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionContent must be used inside Accordion");
  const isOpen = context.selectedValue === value;

  return (
    <div
      className={cn(
        "overflow-hidden text-base text-gray-700 leading-relaxed transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}
    >
      <div className={cn(className)}>{children}</div>
    </div>
  );
}

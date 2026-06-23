import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, Check } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SelectContextType {
  value: string;
  onValueChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  selectedLabel: string;
  setSelectedLabel: (label: string) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

export function Select({
  children,
  value,
  onValueChange,
}: {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');

  return (
    <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, selectedLabel, setSelectedLabel }}>
      <div className="relative w-full">{children}</div>
    </SelectContext.Provider>
  );
}

export function SelectTrigger({
  children,
  className,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  [key: string]: any;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used inside Select");
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const content = document.getElementById('select-content-popover');
        if (content && content.contains(event.target as Node)) {
          return;
        }
        context.setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [context]);

  return (
    <button
      id={id}
      ref={ref}
      type="button"
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-left",
        className
      )}
      onClick={() => context.setIsOpen(!context.isOpen)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  );
}

export function SelectValue({
  placeholder,
}: {
  placeholder?: string;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used inside Select");

  return (
    <span className="block truncate text-gray-700">
      {context.selectedLabel || placeholder}
    </span>
  );
}

export function SelectContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used inside Select");

  if (!context.isOpen) return null;

  return (
    <div
      id="select-content-popover"
      className={cn(
        "absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95 mt-1 w-full bg-white max-h-60 overflow-y-auto",
        className
      )}
    >
      <div className="p-1">{children}</div>
    </div>
  );
}

export function SelectItem({
  children,
  value,
  className,
}: {
  children: React.ReactNode;
  value: string;
  className?: string;
}) {
  const context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used inside Select");
  const isSelected = context.value === value;

  useEffect(() => {
    if (isSelected) {
      context.setSelectedLabel(String(children));
    }
  }, [isSelected, children]);

  const handleSelect = () => {
    context.onValueChange(value);
    context.setSelectedLabel(String(children));
    context.setIsOpen(false);
  };

  return (
    <div
      onClick={handleSelect}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-2.5 pl-8 pr-2 text-base md:text-sm outline-none hover:bg-gray-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer",
        isSelected && "bg-gray-50 font-medium",
        className
      )}
    >
      {isSelected && (
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <Check className="h-4 w-4 text-primary" />
        </span>
      )}
      <span className="block truncate text-gray-700">{children}</span>
    </div>
  );
}

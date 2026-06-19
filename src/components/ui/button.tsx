import * as React from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={cn('inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500', variant === 'primary' ? 'bg-brand-500 text-white hover:bg-brand-400' : 'border border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-800', className)} {...props} />
  );
}

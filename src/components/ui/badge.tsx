import * as React from 'react';

import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary';
}

export function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
  return (
    <span className={cn('inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]', variant === 'primary' ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-300', className)} {...props} />
  );
}

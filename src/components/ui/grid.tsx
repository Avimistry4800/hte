import React from 'react';
import { cn } from '@/lib/utils';

export const Grid = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min", className)}>
            {children}
        </div>
    );
};

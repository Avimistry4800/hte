import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-titanium shadow-lg shadow-black/20 p-6 transition-all hover:border-white/20",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }

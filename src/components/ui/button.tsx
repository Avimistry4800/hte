
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost"
    size?: "default" | "sm" | "lg"
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric disabled:pointer-events-none disabled:opacity-50 font-sans tracking-wide",
                    {
                        "bg-electric text-white hover:bg-blue-600 shadow-md shadow-blue-500/20": variant === "primary",
                        "border border-white/20 bg-transparent text-titanium hover:bg-white/10": variant === "secondary",
                        "hover:bg-white/5 text-titanium": variant === "ghost",
                        "h-10 px-4 py-2 text-sm": size === "default",
                        "h-8 rounded-md px-3 text-xs": size === "sm",
                        "h-12 rounded-md px-8 text-base": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }

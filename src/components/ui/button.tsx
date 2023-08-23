import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        landingPrimary:
          "bg-greenButtonBackground border-[3px] border-primaryButtonBorder rounded-full text-greenButtonText font-medium tracking-wider md:hover:scale-110 py-[4.5vw] md:px-[4vw] md:py-[1.3vw] w-1400:px-[56px] w-1400:py-[18px] text-[4vw] md:text-[1.4vw] w-1400:text-[18px]",
        landingSecondary:
          "bg-peach border-[2px] border-secondaryButtonBorder rounded-full text-greenNavbarText font-medium tracking-wider gap-[16px] md:hover:scale-110 py-[4vw] md:px-[4vw] md:py-[1.32vw] w-1400:px-[56px] w-1400:py-[18px] text-[4vw] md:text-[1.4vw] w-1400:text-[18px]",
        landingAppointment:
          "hidden xl:flex font-medium text-offWhiteText text-[18px] border-[3px] border-appointmentButtonBorder rounded-full bg-greenButtonBackground px-[30px] py-[10px] shadow-sm cursor-pointer from-greenNavbarBackground to-greenNavbarText hover:scale-[1.1] active:shadow-none relative z-[2] tracking-wide",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        action: "w-[70vw] sm:w-[60vw] md:w-[auto]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
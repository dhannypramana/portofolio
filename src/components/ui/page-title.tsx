import * as React from "react"
import { cn } from "@/lib/utils"

export const PageTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "w-1/3 md:w-1/5",
      className
    )}
    {...props}
  >
    <h2 className="font-bold text-lg md:text-2xl">{children}</h2>
    <hr className="border-2 border-yellow-600 w-full rounded-2xl mt-1 md:mt-2.5" />
  </section>
))

PageTitle.displayName = "PageTitle"
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  title,  // Accept a title prop
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { title?: string }) {
  return (
    <ProgressPrimitive.Root
        data-slot="progress"
        className={cn(
          "bg-gray-500 relative h-2 w-full overflow-hidden rounded-full",
          className
        )}
        {...props}
        
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="bg-white h-full w-full flex-1 transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </ProgressPrimitive.Root>
    
  )
}

export { Progress }

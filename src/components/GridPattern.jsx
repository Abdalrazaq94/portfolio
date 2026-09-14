import React from "react"
import { cn } from "@/lib/utils"

export function GridPattern({
  width = 30,
  height = 30,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  strokeWidth = 1,
  squares,
  className,
  ...props
}) {
  const id = React.useId()
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-black/20 stroke-black/20",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern height={height} id={id} patternUnits="userSpaceOnUse" width={width} x={x} y={y}>
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
      {squares && (
        <svg aria-label="Grid squares" className="overflow-visible" role="img" x={x} y={y}>
          {squares.map(([sx, sy], index) => (
            <rect
              height={height - 1}
              key={`${sx}-${sy}-${index}`}
              strokeWidth="0"
              width={width - 1}
              x={sx * width + 1}
              y={sy * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  )
}

export default GridPattern
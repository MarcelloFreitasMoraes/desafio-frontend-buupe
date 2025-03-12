import * as React from "react";
import { cn } from "../lib/utils";

const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("animate-pulse bg-gray-200 rounded-md", className)} {...props} />
);

export { Skeleton };

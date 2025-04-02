import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Win98Button({
  className,
  children,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "relative min-w-20 cursor-pointer select-none rounded border-2 border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] px-4 py-1 text-sm font-bold text-black transition-all active:border-t-[#000] active:border-l-[#000] active:border-r-[#fff] active:border-b-[#fff] active:pt-[5px] active:pl-[17px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
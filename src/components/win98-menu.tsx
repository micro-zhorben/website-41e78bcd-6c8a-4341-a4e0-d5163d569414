import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface Win98MenuProps extends ComponentProps<"div"> {
  items: {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
  }[];
}

export function Win98Menu({ items, className, ...props }: Win98MenuProps) {
  return (
    <div
      className={cn(
        "w-48 rounded border-2 border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] p-1 shadow-md",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          disabled={item.disabled}
          className={cn(
            "w-full cursor-pointer select-none px-4 py-1 text-left text-sm text-black hover:bg-[#000080] hover:text-white disabled:cursor-not-allowed disabled:opacity-50",
            item.disabled && "cursor-not-allowed opacity-50"
          )}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
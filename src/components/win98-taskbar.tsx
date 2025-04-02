import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { Typography } from "@/components/ui/typography";

interface Win98TaskbarProps extends ComponentProps<"div"> {
  items: {
    label: string;
    active?: boolean;
    onClick?: () => void;
  }[];
}

export function Win98Taskbar({ items, className, ...props }: Win98TaskbarProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 flex h-10 items-center border-t-2 border-t-[#fff] bg-[#c0c0c0] px-2",
        className
      )}
      {...props}
    >
      <div className="flex gap-1">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className={cn(
              "min-w-40 cursor-pointer select-none rounded border-2 border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] px-2 py-1 text-left",
              item.active &&
                "border-t-[#000] border-l-[#000] border-r-[#fff] border-b-[#fff] bg-[#c0c0c0]"
            )}
          >
            <Typography.Small className="text-black">
              {item.label}
            </Typography.Small>
          </button>
        ))}
      </div>
    </div>
  );
}
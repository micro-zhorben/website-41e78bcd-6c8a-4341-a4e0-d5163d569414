import { cn } from "@/lib/utils";
import { X, Minus, Square } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { type ComponentProps } from "react";

interface Win98WindowProps extends ComponentProps<"div"> {
  title: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export function Win98Window({
  title,
  children,
  className,
  onClose,
  onMinimize,
  onMaximize,
  ...props
}: Win98WindowProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[600px] rounded border-2 border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0]",
        className
      )}
      {...props}
    >
      <div className="flex h-7 items-center justify-between bg-[#000080] px-1">
        <Typography.P className="text-white">{title}</Typography.P>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 border border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] p-0 hover:bg-[#c0c0c0]"
            onClick={onMinimize}
          >
            <Minus className="size-3 text-black" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 border border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] p-0 hover:bg-[#c0c0c0]"
            onClick={onMaximize}
          >
            <Square className="size-3 text-black" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 border border-t-[#fff] border-l-[#fff] border-r-[#000] border-b-[#000] bg-[#c0c0c0] p-0 hover:bg-[#c0c0c0]"
            onClick={onClose}
          >
            <X className="size-3 text-black" />
          </Button>
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
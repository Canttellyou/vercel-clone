import { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
type ButtonProps = PropsWithChildren<{
  variant: "light" | "dark";
  className?: string;
}>;

const VARIANT_CLASSES: Record<ButtonProps["variant"], string> = {
  light:
    "bg-[rgb(237,237,237)] text-[rgb(10,10,10)] border-[rgb(10,10,10)] hover:bg-[rgb(220,220,220)]",
  dark: "bg-[rgb(10,10,10)] text-[rgb(237,237,237)] border-0 hover:bg-[#000] shadow-[0px_0px_2px_rgba(255,255,255,0.4)]",
};

const Button: FC<ButtonProps> = ({ children, variant, className }) => {
  return (
    <button
      className={twMerge(
        "relative flex cursor-pointer items-center justify-center gap-x-2.5 rounded-full px-4 py-2 text-sm font-semibold md:w-48 md:py-3 md:text-base",
        VARIANT_CLASSES[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;

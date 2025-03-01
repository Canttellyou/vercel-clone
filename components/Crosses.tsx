import { twJoin } from "tailwind-merge";

export const FloatingCross = () => {
  const boxClass =
    "absolute z-20 aspect-square size-2 md:size-3 border-[#7A7A7A]";
  return (
    <>
      <div
        aria-hidden={true}
        className={twJoin(boxClass, "-left-px -top-px border-l border-t")}
      />
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          "-left-2 -top-2 border-b border-r md:-left-3 md:-top-3"
        )}
      />
    </>
  );
};

export const FloatingCrossRight = () => {
  const boxClass =
    "absolute z-20 aspect-square size-2 md:size-3 border-[#7A7A7A]";
  return (
    <>
      <div
        aria-hidden={true}
        className={twJoin(boxClass, "right-[-1.25%] -top-px border-l border-t")}
      />
      <div
        aria-hidden={true}
        className={twJoin(
          boxClass,
          "right-[-1px] -top-2 border-b border-r md:right-[-2px] md:-top-3"
        )}
      />
    </>
  );
};

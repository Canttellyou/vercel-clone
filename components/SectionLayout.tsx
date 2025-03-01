import React from "react";

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#000]  text-[rgb(237,237,237)]">
      <header className="flex flex-col w-full items-center px-4">
        {/* Grid Container */}
        <div className="relative grid grid-cols-[repeat(8,var(--cellsize))]  place-items-center border border-white/10 md:grid-cols-[repeat(12,var(--cellsize))] ">
          <div className="col-span-full w-full">{children}</div>
        </div>
      </header>
    </main>
  );
};

export default SectionLayout;

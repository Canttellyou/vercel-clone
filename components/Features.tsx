import { images } from "@/assets";
import {
  LucideBookMarked,
  LucideBuilding2,
  LucideRefreshCcw,
  MessageCircle,
  ShieldCheck,
  TerminalIcon,
  TrendingUp,
} from "lucide-react";
import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";
import { FloatingCross, FloatingCrossRight } from "./Crosses";
import Button from "./Button";

const Features = () => {
  const firstFeatures = [
    {
      icon: <TerminalIcon size={20} />,
      iconTitle: "Git-connected Deploys",
      title: "From localhost to https, in seconds.",
      description: "Deploy from Git or your CLI.",
      image: images.build,
    },
    {
      icon: <MessageCircle size={20} />,
      iconTitle: "Collaborative pre-production",
      title: "Every deploy is remarkable.",
      description:
        "Chat with your team on real, production-grade UI, not just designs.",
      image: images.chat,
    },
  ];

  const secondFeatures = [
    {
      icon: <LucideRefreshCcw size={20} />,
      iconTitle: "Instant Rollbacks",
      title: "Go ahead, deploy on Friday..",
      description: "Instantly rollback to a working deployment.",
      image: images.rollback,
    },
    {
      icon: <LucideBookMarked size={20} />,
      iconTitle: "Conformance",
      title: "Move fast, don’t break things. ",
      description:
        "Keep quality high while maintaining velocity with Enterprise Monorepos.",
      image: images.conformance,
    },
  ];
  return (
    <>
      <main className="relative w-full overflow-x-hidden bg-[#000]  text-[rgb(237,237,237)]">
        <header className="flex flex-col w-full items-center px-4">
          {/* Grid Container */}
          <div className="relative grid grid-cols-[repeat(8,var(--cellsize))] grid-rows-[1fr_repeat(1,0.5rem)] place-items-center border border-white/10 md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(1, 4rem)]"></div>
        </header>
      </main>
      <SectionLayout>
        <div className="flex min-h-[80vh] w-full justify-between border-b border-b-white/10">
          {firstFeatures.map((feature, i) => (
            <div
              className="w-[50%] p-8 relative"
              key={i}
              style={{
                borderRight: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "",
              }}
            >
              <div className="flex w-fit gap-1 ">
                {feature.icon}
                <p className="">{feature.iconTitle}</p>
              </div>
              <h1 className="text-[1.5rem] font-semibold text-white">
                {feature.title}
              </h1>
              <p className="text-[1.5rem] text-[#919191]">
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={feature.title}
                style={{ width: "80%" }}
                className="absolute bottom-8 left-8"
              />
            </div>
          ))}
        </div>
        <div className="relative flex min-h-[80vh] w-full justify-between p-10 bg-[#0A0A0A] border-b border-b-white/10">
          <FloatingCrossRight />
          <div className="w-full relative">
            <div className="flex w-full gap-1 ">
              <TrendingUp />
              <p className="">Frontend Observability</p>
            </div>
            <h1 className="text-[1.5rem] font-semibold text-white">
              Privacy-friendly, lightweight Analytics.
            </h1>
            <p className="text-[1.5rem] text-[#919191]">
              Upgrade your post-launch workflow with actionable,
              <br /> real-time insights.
            </p>
            <img
              src={
                "https://assets.vercel.com/image/upload/v1715228589/front/home/new/grid/analytics-large-dark.png"
              }
              alt={"Frontend Observability"}
              style={{ width: "100%" }}
              className="absolute bottom-8 left-0"
            />
          </div>
        </div>
        <div className="relative flex min-h-[80vh] w-full justify-between border-b border-b-white/10">
          <FloatingCross />
          {secondFeatures.map((feature, i) => (
            <div
              className="w-[50%] p-8 relative"
              key={i}
              style={{
                borderRight: i === 0 ? "1px solid rgba(255,255,255,0.1)" : "",
              }}
            >
              <div className="flex w-fit gap-1 ">
                {feature.icon}
                <p className="">{feature.iconTitle}</p>
              </div>
              <h1 className="text-[1.5rem] font-semibold text-white">
                {feature.title}
              </h1>
              <p className="text-[1.5rem] text-[#919191]">
                {feature.description}
              </p>
              <Image
                src={feature.image}
                alt={feature.title}
                style={{ width: "80%" }}
                className="absolute bottom-8 left-8"
              />
            </div>
          ))}
        </div>
      </SectionLayout>
      <SectionLayout>
        <div className="flex w-full py-10 items-center justify-center gap-4">
          <h1 className=" text-balance text-center text-[clamp(24px,3.75vw,20px)] font-bold tracking-tighter md:max-w-none xs-h:text-[22px]">
            Scale your
          </h1>
          <Button variant="dark">
            <LucideBuilding2 />
            <span>Enterprise</span>
          </Button>
          <h1 className=" text-balance text-center text-[clamp(15px,3.75vw,20px)] font-bold tracking-tighter md:max-w-none xs-h:text-[22px]">
            without compromising
          </h1>
          <Button variant="dark">
            <ShieldCheck />
            <span>Security</span>
          </Button>
        </div>
      </SectionLayout>
      <main className="relative w-full overflow-x-hidden bg-[#000]  text-[rgb(237,237,237)]">
        <header className="flex flex-col w-full items-center px-4">
          {/* Grid Container */}
          <div className="relative grid grid-cols-[repeat(8,var(--cellsize))] grid-rows-[1fr_repeat(1,0.5rem)] place-items-center border border-white/10 md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(1, 4rem)]"></div>
        </header>
      </main>

      <SectionLayout>
        <div className="relative flex flex-col md:flex-row h-[35vh] w-full justify-between p-10">
          <FloatingCross />
          <div className="w-full md:w-[70%] h-full relative">
            <h1 className="  text-[clamp(15px,3.75vw,25px)] font-semibold tracking-tighter md:max-w-none xs-h:text-[22px]">
              Ready to deploy?{" "}
              <span className="text-[rgba(237,237,237,0.4)]">
                Start building with a free account.
              </span>
            </h1>
            <h1 className="   text-[clamp(15px,3.75vw,25px)] font-semibold tracking-tighter md:max-w-none xs-h:text-[22px]">
              Speak to an expert for your{" "}
              <span className="text-[rgb(82,168,255)]">Pro</span> or{" "}
              <span className="text-[rgb(191,122,240)]">Enterprise </span>
              needs.
            </h1>
            <div className="absolute bottom-0 mt-3 flex gap-4 md:gap-6">
              <Button variant="light">
                <span className="md:hidden">Deploy</span>
                <span className="hidden md:block">Start Deploying</span>
              </Button>
              <Button variant="dark">Talk to an Expert</Button>
            </div>
          </div>
          <div className="w-full h-full md:w-[30%] relative">
            <h1 className=" text-[clamp(10px,3.75vw,15px)] font-semibold tracking-tighter md:max-w-none xs-h:text-[22px]">
              Explore Vercel Enterprise{" "}
              <span className="text-[rgba(237,237,237,0.4)]">
                with an interactive product tour, trial, or a personalized demo.
                Start building with a free account.
              </span>
            </h1>
            <Button variant="dark" className="absolute bottom-0 ">
              Explore Enterprise
            </Button>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default Features;

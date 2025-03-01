// components/Footer.js
import Link from "next/link";
import { FloatingCrossRight } from "./Crosses";
import { Github, Linkedin, X, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <main className="relative w-full overflow-x-hidden bg-[#000]  text-[rgb(237,237,237)]">
      <header className="flex flex-col w-full items-center px-4 relative">
        <div className="relative grid grid-cols-[repeat(8,var(--cellsize))]  place-items-center   md:grid-cols-[repeat(12,var(--cellsize))] ">
          <div className="relative col-span-full w-full pt-[6rem]">
            <FloatingCrossRight />

            <footer className="bg-black text-white py-12">
              <div className="container mx-auto px-4">
                <div className="flex w-full justify-between flex-wrap mb-8">
                  <div>
                    <h3 className="text-sm font-semibold mb-4">Product</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/features"
                          className="text-gray-400 hover:text-white"
                        >
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/integrations"
                          className="text-gray-400 hover:text-white"
                        >
                          Integrations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/pricing"
                          className="text-gray-400 hover:text-white"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/docs"
                          className="text-gray-400 hover:text-white"
                        >
                          Documentation
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/blog"
                          className="text-gray-400 hover:text-white"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/support"
                          className="text-gray-400 hover:text-white"
                        >
                          Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/case-studies"
                          className="text-gray-400 hover:text-white"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/guides"
                          className="text-gray-400 hover:text-white"
                        >
                          Guides
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/about"
                          className="text-gray-400 hover:text-white"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className="text-gray-400 hover:text-white"
                        >
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/press"
                          className="text-gray-400 hover:text-white"
                        >
                          Press
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact"
                          className="text-gray-400 hover:text-white"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-4 ">Social</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="https://twitter.com/vercel"
                          className="text-gray-400 flex gap-1 items-center hover:text-white transition-colors"
                        >
                          <X size={20} />
                          Twitter
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://github.com/vercel"
                          className="text-gray-400 hover:text-white transition-colors flex gap-1 items-center"
                        >
                          <Github size={20} />
                          Github
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://linkedin.com/company/vercel"
                          className="text-gray-400 hover:text-white transition-colors flex gap-1 items-center"
                        >
                          <Linkedin size={20} />
                          LinkedIn
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://youtube.com/vercel"
                          className="text-gray-400 hover:text-white transition-colors flex gap-1 items-center"
                        >
                          <Youtube size={20} />
                          YouTube
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link className="flex items-center" href={"#header"}>
                      <svg viewBox="0 0 76 65" className="h-5 text-white">
                        <path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Footer;

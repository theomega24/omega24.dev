/* eslint-disable jsx-a11y/anchor-has-content */
import { Outlet } from "@remix-run/react";
import NavLink from "~/components/NavLink";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

export default function __layout() {
    return (
        <div className="flex h-full w-full justify-center items-center pb-20">
            <div className="flex flex-col h-5/6 w-[84rem] p-4">
                <div className="flex justify-between items-center p-6 mb-4 bg-zinc-800 rounded-2xl">
                    <h1 className="text-3xl">
                        <span className="font-bold">omega24</span>
                        <span className="text-zinc-500"> | </span>
                        <span className="text-purple-600">Software Engineer</span>
                    </h1>
                    <nav className="flex gap-4 items-center">
                        <NavLink to="/" name="About" />
                        <NavLink to="/experience" name="Experience" />
                        <NavLink to="/contact" name="Contact" />

                        <a href="https://github.com/theomega24" target="_blank" className="ml-4" aria-label="GitHub Account" rel="noreferrer"><GitHubLogoIcon className="w-6 h-6" /></a>
                        <a href="https://twitter.com/bkerllenevich" target="_blank" aria-label="Twitter Account" rel="noreferrer"><TwitterLogoIcon className="w-6 h-6" /></a>
                    </nav>
                </div>
                <div className="h-full w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

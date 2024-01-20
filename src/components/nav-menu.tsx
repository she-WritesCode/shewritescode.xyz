import Image from "next/image";
import { NavItem } from "./nav-item";
import Home from "@/icons/home.svg"
import About from "@/icons/about.svg"
import Blog from "@/icons/blog.svg"

export interface NavMenuProps {
    title?: string;
}

export const NavMenu: React.FC<NavMenuProps> = ({ }) => {
    return <div className="fixed z-50 bottom-[2rem] inset-x-auto mx-auto" >
        <ul className="flex items-center justify-center gap-8 md:max-w-3xl mx-auto rounded-xl bg-white  p-2 " style={{ boxShadow: "rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px, rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px, rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px, rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px" }}>
            <li><NavItem icon={<Home className="w-8 h-8  stroke-gray-400 stroke-[5px]" />} href={""}>Home</NavItem></li>
            <li><NavItem icon={<About className="w-8 h-8  stroke-gray-400 stroke-[5px]" />} href={""}>About</NavItem></li>
            <li><NavItem icon={<Blog className="w-8 h-8  stroke-gray-400 stroke-[5px]" />} href={""}>Blog</NavItem></li>
        </ul>
    </div>
}
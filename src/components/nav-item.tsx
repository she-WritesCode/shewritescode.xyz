import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { motion } from 'framer-motion'

export interface NavItemProps {
    children: ReactNode;
    icon: ReactNode;
    href: string;
}

export const NavItem: React.FC<NavItemProps> = ({ children, icon, href }) => {
    return <Link href={href} >
        <motion.div initial={{ y: 0 }} whileHover={{ y: -7 }} className="relative flex items-center gap-4 p-2 pr-4 rounded-xl">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ boxShadow: "rgba(114, 98, 218, 0.184) 0px 0.636953px 2.16564px -1px, rgba(114, 98, 218, 0.176) 0px 1.9316px 6.56746px -2px, rgba(114, 98, 218, 0.145) 0px 5.10612px 17.3608px -3px, rgba(114, 98, 218, 0.047) 0px 16px 54.4px -4px" }}>{icon}</div>
            <div className="text-xl">{children}</div>
        </motion.div>
    </Link>
}
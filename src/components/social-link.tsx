"use client";
import { Gaegu } from "next/font/google";
import { ReactNode } from "react";
import ArrowRightTop from '@/icons/arrow-right-top.svg'
import { Variants, motion } from "framer-motion"


const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface SocialLinkProps {
    children: ReactNode;
    href: string;
}

const button: Variants = {
    hovered: { rotate: -15 }
}
const icon: Variants = {
    hovered: { opacity: 0, x: "-50%" },
}
const arrow: Variants = {
    hovered: { opacity: 1, x: 0 },
}

export const SocialLink: React.FC<SocialLinkProps> = ({ children, href }) => {

    return <motion.a
        whileHover={'hovered'}
        whileTap={{ scale: 1.0 }}
        variants={button}
        transition={{ type: 'spring' }}
        href={href} target="_blank" className={"badge " + gaegu.className} style={{ position: 'relative', width: "2.8rem", height: "2.8rem" }}>

        <motion.span variants={icon} style={{ opacity: 1, y: 0, position: 'absolute' }}>{children}</motion.span>
        <motion.span variants={arrow} style={{ opacity: 0, y: 0, position: 'absolute' }} ><ArrowRightTop className='fill-gray-700 w-6 h-6' /></motion.span>

    </motion.a>

}
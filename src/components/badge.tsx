'use client';
import { Gaegu } from "next/font/google";
import { ReactNode } from "react";
import { motion } from 'framer-motion'

const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface BadgeProps {
    children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {

    return <motion.div
        whileHover={{ rotate: -7 }} className="badge" style={gaegu.style}>{children}</motion.div>
}
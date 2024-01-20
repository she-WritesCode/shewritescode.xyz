'use client';
import { Gaegu } from "next/font/google";
import { ReactNode } from "react";
import { motion } from 'framer-motion'

const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface StickyNoteProps {
    children: ReactNode;
    color?: 'green' | 'red' | 'yellow' | 'blue' | "purple" | "orange" | 'cooler';
    rotate?: number
}

export const StickyNote: React.FC<StickyNoteProps> = ({ children, color = 'green', rotate = -7 }) => {

    return <motion.div
        drag
        className={gaegu.className + " sticky-note z-50 " + color}
        style={{ rotate }}
    >
        {children}
    </motion.div>
}
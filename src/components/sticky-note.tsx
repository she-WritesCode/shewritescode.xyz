'use client';
import { Gaegu } from "next/font/google";
import { ReactNode } from "react";
import { motion } from 'framer-motion'

const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});
export type StickyNotesColor = 'green' | 'red' | 'yellow' | 'blue' | "purple" | "orange" | 'cooler';
export interface StickyNoteProps {
    children: ReactNode;
    color?: StickyNotesColor;
    rotate?: number
    className?: string
    textAlign?: 'left' | 'center' | 'right';
}

export const StickyNote: React.FC<StickyNoteProps> = ({ children, color = 'green', rotate = -7, className, textAlign = 'center' }) => {

    return <motion.div
        drag
        className={gaegu.className + " sticky-note z-50 " + color + " " + className}
        style={{ rotate, textAlign, alignItems: textAlign === 'left' ? 'start' : textAlign === 'right' ? 'end' : 'center' }}
    >
        {children}
    </motion.div>
}
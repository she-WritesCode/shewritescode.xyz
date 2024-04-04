import { useAnimation, useInView, motion, Variants, Variant } from "framer-motion";
import { ReactNode, SVGProps, useEffect, useRef } from "react";

// const squareVariants: Variants = {
//     visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
//     hidden: { opacity: 0, scale: 0 }
// };

export interface SectionProps {
    id?: string;
    children?: ReactNode;
    visible: Variant;
    hidden: Variant;
    simple?: boolean
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, visible, hidden, simple = false, className }) => {
    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <motion.div
            id={id}
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{ visible, hidden }}
            className={(simple ? "" : "section") + " " + className}
        >{children}</motion.div>
    );
}
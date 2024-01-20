import { Variants, motion } from "framer-motion";
import { SVGProps } from "react";

export interface HapticksProps extends SVGProps<SVGSVGElement> {
    title?: string;
}

export const Hapticks: React.FC<HapticksProps> = (props) => {
    const icon: Variants = {
        hidden: {
            pathLength: 0,
            // fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            // fill: "rgba(255, 255, 255, 1)"
            repeatCount: 3
        }
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 43" {...props}>
            <defs>
                <clipPath id="a">
                    <path d="M0 0h43v43H0z" />
                </clipPath>
            </defs>
            <g
                clipPath="url(#a)"
                style={{
                    display: "block",
                }}
            >
                <motion.path

                    variants={icon}
                    initial="hidden"
                    animate="visible"

                    fill="none"
                    stroke="#474747"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M23.472 5.268c-.074 2.155.497 4.293 1.361 6.269.865 1.975 2.017 3.809 3.165 5.635M2.5 11.5a47.396 47.396 0 0 0 6.533 5.115c3.096 2.013 6.552 3.697 10.241 3.875M11.664 38.979c2.897-1.675 5.483-4.148 8.782-4.714"
                />
            </g>
        </svg>
    )
}
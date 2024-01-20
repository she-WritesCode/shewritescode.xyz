import { motion } from 'framer-motion';

export interface PathProps {
    pathColor: string;
    bg: string;
}

export const Path = ({ pathColor, bg }: PathProps) => {
    return (
        <svg
            width="245.24878"
            height="233.49042"
            viewBox="0 0 64.888737 61.777671"
            version="1.1"
            id="svg1033">
            <defs
                id="defs1030" />
            <g
                id="layer1"
                transform="translate(-20.472293,-22.027827)">
                <g
                    id="g484"
                    transform="translate(11.886667,6.306109)"
                >
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                            pathLength: { delay: 0.8, type: "tween", duration: 3, bounce: 0 }
                        }}
                        stroke={pathColor}
                        strokeDasharray='3.846, 1.282'
                        strokeDashoffset='0'
                        strokeWidth='0.641'
                        style={{ fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }}
                        d="m 70.258127,15.782623 c 0,0 -1.867161,10.194243 -5.854843,12.473363 -9.471023,5.413069 -22.204956,-6.41444 -32.583479,-3.054701 -9.553598,3.092694 -21.015474,9.948708 -22.6557013,19.855557 -1.7758628,10.726077 5.8258513,25.311914 16.2917403,28.255989 11.258271,3.166974 19.313188,-18.990719 30.80157,-16.800859 5.208004,0.992724 10.182339,12.218805 10.182339,12.218805"
                        id="path1154"
                    />
                    <path
                        stroke={bg}
                        strokeDasharray='3.846, 2.282'
                        strokeDashoffset='0'
                        strokeWidth='1.641'
                        style={{ fill: 'none', fillRule: 'evenodd', strokeLinejoin: 'round' }}
                        d="m 70.258127,15.782623 c 0,0 -1.867161,10.194243 -5.854843,12.473363 -9.471023,5.413069 -22.204956,-6.41444 -32.583479,-3.054701 -9.553598,3.092694 -21.015474,9.948708 -22.6557013,19.855557 -1.7758628,10.726077 5.8258513,25.311914 16.2917403,28.255989 11.258271,3.166974 19.313188,-18.990719 30.80157,-16.800859 5.208004,0.992724 10.182339,12.218805 10.182339,12.218805"
                        id="path1155"
                    />
                </g>
            </g>
        </svg>
    );
}
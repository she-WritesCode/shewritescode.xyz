import { Gaegu } from "next/font/google";
import { SectionHeading } from "./section-heading";
import Box from '@/icons/box.svg'
import BoxAnimated from '@/icons/box-animated.svg'
import Image from "next/image";

const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface ProjectCardProps {
    title: string;
    duration: string;
    description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, duration, description }) => {
    return <div className="flex flex-wrap gap-2 relative p-8">
        <div
            style={{
                flex: 'none',
                inset: '-50px -40px -10px -25px',
                position: 'absolute',
                zIndex: '1',
            }}
        >
            <BoxAnimated className='stroke-gray-700' />
        </div>
        <div className="flex md:flex-row flex-col md:gap-8 gap-4 items-center">
            <div className="md:w-3/5 w-full">
                <Image alt='' src={'/busola.jpg'} width={250} height={150} className="object-cover w-full h-56" />
            </div>
            <div className="md:w-2/5 w-full">
                <SectionHeading title={title} size="md" />

                <div className="" style={gaegu.style}>
                    <div className="font-bold mb-2"><span className="text-gray-500 block md:inline">{duration}</span></div>
                    <p className="text-gray-500">{description}</p>
                </div></div>
        </div>
        {/* <div
            style={{
                flex: 'none',
                inset: 0,
                position: 'absolute',
                zIndex: '1',
            }}
        >
            <Box className='stroke-gray-700 w-3xl' />

        </div> */}
    </div >
}
import { Gaegu } from "next/font/google";
import { SectionHeading } from "./section-heading";

const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface ExperienceCardProps {
    company: string;
    title: string;
    duration: string;
    description: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, duration, description }) => {
    return <div className="flex flex-col flex-wrap gap-2">
        <SectionHeading title={company} size="sm" />

        <div className="" style={gaegu.style}>
            <div className="font-bold mb-2">{title} <span className="text-gray-500 block md:inline">{duration}</span></div>
            <p className="text-gray-500">{description}</p>
        </div>
    </div>
}
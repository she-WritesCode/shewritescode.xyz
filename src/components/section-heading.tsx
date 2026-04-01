import { Solway, Gaegu } from "next/font/google";
import Line from '@/icons/line.svg'
import { Hapticks } from "@/components/haptick";

const solway = Solway({
    weight: "500", subsets: ['latin']
});
const gaegu = Gaegu({
    weight: "400", subsets: ['latin']
});

export interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    showLines?: boolean;
    showHapticks?: boolean;
    size?: "sm" | "md" | "lg";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ showLines = false, showHapticks = false, title, subtitle, size = 'lg' }) => {
    const innerTitle = (
        <span className="inline-flex items-center gap-2">
            {title}
            {showHapticks && (
                <Hapticks
                    className='fill-gray-700 w-6 h-6'
                    preserveAspectRatio="xMidYMid slice"
                    style={{ transform: 'scaleX(-1)' }}
                />
            )}
        </span>
    );
    
    const sizeHeading = {
        lg: <h1 className={solway.className + " md:text-5xl text-3xl mb-4 font-semibold"}>{innerTitle}</h1>,
        md: <h3 className={solway.className + " md:text-3xl text-2xl mb-4 font-semibold"}>{innerTitle}</h3>,
        sm: <h4 className={solway.className + " md:text-xl text-lg mb-0 font-semibold"}>{innerTitle}</h4>
    }
    
    return <div className={showLines ? "flex items-center text-center gap-4" : ""}>
        {showLines && <Line />}
        <div>
            {sizeHeading[size]}
            {subtitle && <p className={gaegu.className + " md:text-2xl text-xl text-gray-500"}>{subtitle}</p>}
        </div>
        {showLines && <Line />}
    </div>
}
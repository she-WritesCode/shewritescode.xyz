import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, width, height }) => {
    return <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[150px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
            className={`relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert object-cover h-[200px] w-[200px] rounded-full border-4 border-gray-700`}
            src={src || "/busola.jpg"}
            alt={alt || "Busola Okeowo"}
            width={width || 150}
            height={height || 150}
            priority
        />
    </div>
}
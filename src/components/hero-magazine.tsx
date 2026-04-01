import { Section } from "@/components/section";
import { Gaegu } from "next/font/google";
import Image from "next/image";

const gaegu = Gaegu({ weight: "700", subsets: ['latin'] });

export function HeroMagazine() {
  return (
    <Section visible={{ opacity: 1, y: 0 }} hidden={{ opacity: 0, y: 50 }}>
      <div className="relative w-full max-w-6xl mx-auto min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        <h1 className="absolute top-1/4 uppercase text-[12vw] md:text-[8rem] font-black text-gray-50 whitespace-nowrap tracking-tighter z-0 select-none pointer-events-none">
          SOFTWARE ENGINEER
        </h1>

        <div className="relative z-10 w-[280px] md:w-[450px] aspect-square flex items-end justify-center group cursor-pointer">
          {/*  Sketch(hidden by default, shows on hover) */}
          <Image
            src="/hero_lines.png"
            alt="Busola Sketch"
            width={500}
            height={500}
            className="absolute bottom-0 w-full rounded shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 z-20"
          />
          {/* Real photo (visible by default, hides on hover) */}
          <Image
            src="/hero_clay.jpeg"
            alt="Busola Real Photo"
            width={500}
            height={500}
            className="absolute bottom-0 w-full rounded mix-blend-multiply drop-shadow-md transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] opacity-100 group-hover:opacity-0 group-hover:scale-95 group-hover:translate-y-8 z-10"
          />

          {/* Little hint indicator */}
          <div className="absolute -bottom-8 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full opacity-60 group-hover:opacity-0 transition-opacity whitespace-nowrap">
            Hover me ✨
          </div>
        </div>

        <div className="absolute bottom-0 md:bottom-10 z-20 text-center w-full bg-white/70 backdrop-blur-xl py-6 border-y border-gray-200">
          <h2 className={`text-6xl md:text-8xl font-bold tracking-tighter ${gaegu.className}`}>Busola Okeowo</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-2 font-mono font-bold uppercase text-xs md:text-sm tracking-widest text-gray-500">
            <span>Backend Engineer</span>
            <span className="hidden md:inline">•</span>
            <span>Frontend Engineer</span>
            <span className="hidden md:inline">•</span>
            <span>Mentor</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

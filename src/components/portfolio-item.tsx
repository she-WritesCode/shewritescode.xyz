import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { StickyNote, StickyNotesColor } from "@/components/sticky-note";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/badge";

export interface PortfolioItemProps {
  title: string;
  subtitle: string;
  link?: string;
  showHapticks?: boolean;
  problem: {
    color: StickyNotesColor;
    rotate: number;
    title?: string;
    text: React.ReactNode;
  };
  built: {
    color: StickyNotesColor;
    rotate: number;
    title?: string;
    text: React.ReactNode;
  };
  impact: {
    color: StickyNotesColor;
    rotate: number;
    title: string;
    text: React.ReactNode;
  };
  stack: string[];
}

export const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  subtitle,
  link,
  showHapticks,
  problem,
  built,
  impact,
  stack,
}) => {
  const heading = (
    <SectionHeading
      size="md"
      title={title}
      subtitle={subtitle}
      showHapticks={showHapticks}
    />
  );

  return (
    <div>
      {link ? (
        <a href={link} target="_blank">
          {heading}
        </a>
      ) : (
        heading
      )}

      <MotionConfig
        transition={{
          stiffness: 260,
          damping: 20,
          duration: 1,
          delay: 0.05,
        }}
      >
        <div className="py-24 w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">
          <motion.div
            className="place-self-start md:place-self-start"
            initial={{ y: 600, x: 180 }}
            animate={{ y: 0, x: 0 }}
          >
            <StickyNote textAlign="left" color={problem.color} rotate={problem.rotate} className="!w-full">
              <h4 className="font-bold mb-2 text-2xl">{problem.title || "The problem"}</h4>
              <div className="text-lg">{problem.text}</div>
            </StickyNote>
          </motion.div>

          <motion.div
            className="md:row-span-2 md:col-start-2 md:mr-8 h-full"
            initial={{ y: 600, x: -100 }}
            animate={{ y: 0, x: 0 }}
          >
            <StickyNote textAlign="left" color={built.color} rotate={built.rotate} className="!w-full !h-full">
              <h4 className="font-bold mb-2 text-2xl">{built.title || "What I built"}</h4>
              <div className="text-lg">{built.text}</div>
            </StickyNote>
          </motion.div>

          <motion.div
            className="place-self-center md:col-start-1 md:row-start-2"
            initial={{ y: 600, x: 0 }}
            animate={{ y: 0, x: 0 }}
          >
            <StickyNote textAlign="left" color={impact.color} rotate={impact.rotate} className="!w-full">
              <div className="font-bold text-2xl mb-1">{impact.title}</div>
              <div className="text-lg">{impact.text}</div>
            </StickyNote>
          </motion.div>
        </div>
      </MotionConfig>

      <div className="flex gap-2 flex-wrap pl-8 mt-6 items-center">
        <span className="font-bold mr-2">stack →</span>
        {stack.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
};

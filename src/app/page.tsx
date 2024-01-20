'use client';
import { Gaegu } from "next/font/google";
import { SectionHeading } from "@/components/section-heading";
import { Avatar } from "@/components/avatar";
import Download from '@/icons/download.svg'
import Haptick from '@/icons/haptick.svg'
import Instagram from '@/icons/instagram.svg'
import Linkedin from '@/icons/linkedin.svg'
import Twitter from '@/icons/twitter.svg'
import Location from '@/icons/location.svg'
import Github from '@/icons/github.svg'
import { Badge } from "@/components/badge";
import { ExperienceCard } from "@/components/experience-card";
import { SocialLink } from "@/components/social-link";
import { StickyNote } from "@/components/sticky-note";
import { Path } from "@/components/path";
import { ProjectCard } from "@/components/project-card";
import { NavMenu } from "@/components/nav-menu";
import { MotionConfig, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hapticks } from "@/components/haptick";

const gaegu = Gaegu({
  weight: "400", subsets: ['latin']
});



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Home() {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <>
      <NavMenu />
      <main className="flex min-h-screen flex-col items-center justify-between px-12">
        <div className="z-10 max-w-3xl w-full items-center justify-center text-center lg:flex py-48 h-screen">

          <div className="flex flex-col items-center">
            <SectionHeading title="Hi, I'm Busola Okeowo" subtitle="A FullStack Software Engineer" />
            <MotionConfig transition={{
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 0.05,
            }}>
              <div className="py-24 w-full grid grid-cols-2 gap-x-4 gap-y-8">
                <motion.div className="place-self-end" initial={{ y: 600, x: -180 }} animate={{ y: 0, x: 0 }}>
                  <StickyNote color="blue" rotate={9}>Available for hiring</StickyNote>
                </motion.div>

                <motion.div initial={{ y: 600, x: 180 }} animate={{ y: 0, x: 0 }}>
                  <StickyNote color="cooler"><div className="text-5xl">👋🏻</div></StickyNote>
                </motion.div>

                <motion.div className="place-self-end" initial={{ y: 600, x: 55 }} animate={{ y: 0 }}>
                  <StickyNote color="green" rotate={10}>Building <motion.a whileHover={{ scale: 1.1, }} className="underline" target="_blank" href='https://agrictrail.com'>AgricTrail.com</motion.a></StickyNote>
                </motion.div>
              </div></MotionConfig>
          </div>
        </div>

        <div className="z-10 max-w-3xl w-full items-center justify-center lg:flex py-24 min-h-screen">
          <div className="flex flex-col gap-12 items-center">

            <SectionHeading title="About" showLines />
            <div className="grid md:grid-cols-2 gap-8">

              <div className="flex flex-col items-center">
                <Avatar />

                <div className="py-24 w-full grid grid-cols-2 gap-x-6 gap-y-8">
                  <motion.div className="place-self-end" initial={{ y: 20, x: -18 }} animate={{ y: 0, x: 0 }}>
                    <StickyNote>3+ years in Software Engineering</StickyNote>
                  </motion.div>
                  <div>
                    <StickyNote color="red" rotate={7}>Over a half-decade of experience on the web</StickyNote></div>
                  <div className="place-self-end">
                    <StickyNote color="orange" rotate={8}>1+ year leading technical teams</StickyNote></div>
                  <div>
                    <StickyNote color="blue" rotate={-6}>Teaching web development</StickyNote></div>
                  <div className="place-self-end">
                    <StickyNote color="purple" rotate={-9}><Location className='stroke-gray-500 w-8 h-8' /> <div>Based in Lagos, Nigeria</div></StickyNote>
                  </div>
                  <div>
                    <StickyNote color="yellow" rotate={7}>BSc. Industrial Mathematics</StickyNote></div>
                </div>
              </div>

              <div className="grid gap-12">
                <div className="text-left">

                  <SectionHeading title="Links" size="md" />

                  <div className="flex flex-wrap gap-4">

                    <SocialLink href="https://instagram.com/she_writescode">
                      <Instagram className='fill-gray-700 w-6 h-6' />
                    </SocialLink>



                    <SocialLink href="https://linkedin.com/in/she-writescode">
                      <Linkedin className='fill-gray-700 w-6 h-6' />
                    </SocialLink>



                    <SocialLink href="https://github.com/she-writescode">
                      <Github className='fill-gray-700 w-6 h-6' />
                    </SocialLink>



                    <SocialLink href="https://twitter.com/she_writescode">
                      <Twitter className='fill-gray-700 w-6 h-6' />
                    </SocialLink>


                  </div>
                </div>
                <div>
                  <SectionHeading title="Skills" size="md" />

                  <motion.div variants={container}
                    initial="hidden"
                    animate="visible" className="flex flex-wrap gap-4">

                    <motion.div variants={item}><Badge>Problem Solving</Badge></motion.div>

                    <motion.div variants={item}><Badge>Frontend</Badge></motion.div>

                    <motion.div variants={item}><Badge>Backend</Badge></motion.div>

                    <motion.div variants={item}><Badge>Product Design</Badge></motion.div>

                    <motion.div variants={item}><Badge>Product Management</Badge></motion.div>

                    <motion.div variants={item}><Badge>Wordpress Development</Badge></motion.div>
                  </motion.div>
                </div>

                <div className="">
                  <SectionHeading title="Experience" size="md" />

                  <div className="grid gap-4">
                    <ExperienceCard company={"Novugrid"} title={"Senior Product Designer"} duration={"2023 - Current"} description={"I developed user-focused delightful digital experiences."} />

                    <ExperienceCard company={"BorderlessHQ"} title={"Senior Product Designer"} duration={"2021 - 2023"} description={"I developed user-focused delightful digital experiences."} />
                  </div>
                </div>

                <div>
                  <a className="button" style={gaegu.style}>
                    <Download
                      className='fill-gray-700 w-8 h-8'
                      focusable="false"
                    />
                    <span>Download Resume</span>
                    <Hapticks
                      className='fill-gray-700 w-6 h-6'
                      preserveAspectRatio="xMidYMid slice"
                      style={{ transform: 'scaleX(-1)' }}
                    />
                    {/* <Line /> */}
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
        <div className="z-10 max-w-3xl w-full items-center justify-center lg:flex py-24 min-h-screen relative">

          <div className="flex flex-col gap-12 items-center w-full">
            <SectionHeading title="Projects" showLines />
            <div className="grid md:gap-16 gap-8">
              <ProjectCard title={"Senior Product Designer"} duration={"2021 - 2023"} description={"I developed user-focused delightful digital experiences."} />
              <ProjectCard title={"Senior Product Designer"} duration={"2021 - 2023"} description={"I developed user-focused delightful digital experiences."} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

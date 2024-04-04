'use client';
import { Gaegu } from "next/font/google";
import { SectionHeading } from "@/components/section-heading";
import { Avatar } from "@/components/avatar";
import Download from '@/icons/download.svg'
import Instagram from '@/icons/instagram.svg'
import Linkedin from '@/icons/linkedin.svg'
import Twitter from '@/icons/twitter.svg'
import Location from '@/icons/location.svg'
import Github from '@/icons/github.svg'
import { Badge } from "@/components/badge";
import { ExperienceCard } from "@/components/experience-card";
import { SocialLink } from "@/components/social-link";
import { StickyNote } from "@/components/sticky-note";
import { ProjectCard } from "@/components/project-card";
import { NavMenu } from "@/components/nav-menu";
import { MotionConfig, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hapticks } from "@/components/haptick";
import { Section } from "@/components/section";
import { ContactFrom } from "@/components/contact-form";
// @ts-ignore
import Obfuscate from 'react-obfuscate';


const gaegu = Gaegu({
  weight: "400", subsets: ['latin']
});



const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
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

        <Section visible={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.5, y: 0 }}>

          <div className="flex flex-col items-center text-center">
            <div className="mb-8">
              <Avatar src="/busola-2.jpeg" />
            </div>
            <SectionHeading title="Hi, I'm Busola Okeowo" subtitle="A Full Stack Software Engineer" />
            <MotionConfig transition={{
              stiffness: 260,
              damping: 20,
              duration: 1,
              delay: 0.05,
            }}>
              <div className="py-24 w-full grid grid-cols-2 gap-x-4 gap-y-8">
                <motion.div className="place-self-end" initial={{ y: 600, x: -180 }} animate={{ y: 0, x: 0 }}>
                  <StickyNote color="purple" rotate={9}>Elevating Businesses&apos; Online Presence with <motion.a whileHover={{ scale: 1.1, }} className="underline" target="_blank" href='https://myrtletechnology.com'>myrtletechnology.com</motion.a></StickyNote>
                </motion.div>

                <motion.div initial={{ y: 600, x: 180 }} animate={{ y: 0, x: 0 }}>
                  <StickyNote color="cooler"><div className="text-5xl">👋🏻</div></StickyNote>
                </motion.div>

                <motion.div className="place-self-end" initial={{ y: 600, x: -30 }} animate={{ y: 0, x: 0 }}>
                  <StickyNote color="red" rotate={-9}>Passionate Educator and Mentor</StickyNote>
                </motion.div>

                <motion.div className="place-self-end" initial={{ y: 600, x: 60 }} animate={{ y: 0, x: -10 }}>
                  <StickyNote color="green" rotate={10}>Empowering Smallholder Agribusinesses with <motion.a whileHover={{ scale: 1.1, }} className="underline" target="_blank" href='https://agrictrail.com'>AgricTrail.com</motion.a></StickyNote>
                </motion.div>
              </div></MotionConfig>
          </div>
        </Section>

        <Section id="about" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 200, }}>
          <div className="flex flex-col gap-10 items-center">

            <SectionHeading title="About" showLines />
            <div className="grid md:grid-cols-2 gap-8">

              <div className="flex flex-col items-center text-center">
                <div>
                  <Avatar />
                  <div className="mt-4 text-3xl">Busola Okeowo</div>
                </div>
                <div>
                  <p>Busola Okeowo is a seasoned Software Engineer with over 6 years of experience specializing in backend development using Node.js and PHP, and frontend development with Vue.js and React.js. She is also proficient in UI design, utilizing tools like Figma to create stunning user interfaces.
                  </p>
                  {/* <p>During her time at Novugrid Technologies, Busola played a key role in developing a business management app that currently supports over 10,000 businesses, facilitating their operations and online sales.
                  </p>
                  <p>Outside of her professional endeavors, Busola is deeply involved in her community, serving as a Sunday school teacher in her local church. She is passionate about teaching and empowering young minds to grow strong in their identity in Christ.
                  </p>
                  <p>As a Co-founder at Greater Eredo Investments Ltd., Busola is dedicated to empowering smallholder agribusinesses with sustainable solutions. Through her digital agency, Myrtle Technology, she aims to elevate businesses&apos; online presence and provide resources that promote positive values and moral excellence for children.
                  </p> */}
                  <p>Busola&apos;s mission is to empower young people to recognize their inherent value and contribute meaningfully to society, both through her work at Greater Eredo Investments Ltd. and Myrtle Technology. Her dedication to technology, education, and community empowerment is evident in all aspects of her professional and personal life.
                  </p>
                </div>
                <div className="py-24 w-full grid grid-cols-2 gap-x-6 gap-y-8">
                  <motion.div className="place-self-end" initial={{ y: 20, x: -18 }} animate={{ y: 0, x: 0 }}>
                    <StickyNote>4+ years in Software Engineering</StickyNote>
                  </motion.div>
                  <div>
                    <StickyNote color="red" rotate={7}>6+ years of experience building web solutions</StickyNote></div>
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

                <div className="md:text-left">
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

                  <Section visible={container.visible}
                    hidden={container.hidden} simple className="flex flex-wrap gap-4">

                    <motion.div variants={item}><Badge>Problem Solving</Badge></motion.div>

                    <motion.div variants={item}><Badge>Frontend (Vue.js, React.Js)</Badge></motion.div>

                    <motion.div variants={item}><Badge>Backend (Node.js, PHP)</Badge></motion.div>

                    <motion.div variants={item}><Badge>Product Design</Badge></motion.div>

                    <motion.div variants={item}><Badge>Product Management</Badge></motion.div>

                    <motion.div variants={item}><Badge>Wordpress Development</Badge></motion.div>
                  </Section>
                </div>

                <div className="">
                  <SectionHeading title="Experience" size="md" />

                  <Section visible={container.visible}
                    hidden={container.hidden} simple className="grid gap-4">

                    <motion.div variants={item}>
                      <ExperienceCard
                        company={"Greater Eredo Investments Ltd"}
                        title={"Co-Founder & CTO"}
                        duration={"Apr 2023 - Present"}
                        description={"I drive the strategic and technical direction of our pioneering Agriculture trade centre platform. With a focus on innovation and scalability, AgricTrail aims to transform the agriculture industry through a seamless digital marketplace and food system management."}
                      /></motion.div>
                    <motion.div variants={item}>
                      <ExperienceCard
                        company={"Noja Technologies"}
                        title={"Software Engineer"}
                        duration={"Sept 2020 - March 2024"}
                        description={"My role encompasses a diverse range of responsibilities. I lead by defining feature requirements, managing the technical team, and overseeing server administration for our website. I've played a pivotal role in building internal systems, including mentoring interns and integrating new team members, fostering a culture of continuous learning and development."}
                      /></motion.div>
                    <motion.div variants={item}>
                      <ExperienceCard
                        company={"Golemon"}
                        title={"Software Engineer"}
                        duration={"April 2023 - June 2023"}
                        description={"I helped build backend infrastructure for managing operations within the Golemon such as the inventory management system, and order fulfillment system"}
                      /></motion.div>
                    <motion.div variants={item}>
                      <ExperienceCard
                        company={"BorderlessHQ"}
                        title={"Frontend Engineer"}
                        duration={"Nov 2021 - May 2022"}
                        description={"I devloped front-end applications, meeting UI requirements and integrating API endpoints. Created an efficient project structure for the frontend app, optimizing developer experience. Collaborated with cross-functional teams to deliver polished user interfaces. Proactively resolved technical issues and maintained code quality."}
                      /></motion.div>
                  </Section>
                </div>

                <div>
                  <a target="_blank" href="https://drive.google.com/file/d/1NVWXNvMLj2LQDcleHx3vC8pTIY3vV0hB/view?usp=sharing" style={gaegu.style}>
                    <div className="button">
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
                    </div>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </Section>

        {/* <Section visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 500, }}>

          <div className="flex flex-col gap-12 items-center w-full">
            <SectionHeading title="Articles" showLines />
            <div className="grid md:gap-16 gap-8">
              <ProjectCard title={"Senior Product Designer"} duration={"2021 - 2023"} description={"I developed user-focused delightful digital experiences."} />
              <ProjectCard title={"Senior Product Designer"} duration={"2021 - 2023"} description={"I developed user-focused delightful digital experiences."} />
            </div>
          </div>
        </Section> */}

        <Section id="contact" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 500, }}>

          <div className="flex flex-col gap-12 items-center">
            <SectionHeading title="Contact Me" showLines />
            <div className="grid md:gap-16 gap-8 ">
              <div>
                <div className="text-3xl text-center mb-4">
                  <Obfuscate
                    email="hello@shewritescode.xyz"
                    headers={{
                      body: 'Hello Busola,\nHow are you doing today? ',
                    }}
                  />
                </div>
                <div className="flex flex-wrap gap-4 w-full justify-center">

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
              {/* <ContactFrom /> */}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}

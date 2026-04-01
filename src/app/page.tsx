'use client';
import Image from 'next/image';
import { Gaegu } from "next/font/google";
import { SectionHeading } from "@/components/section-heading";
import Download from '@/icons/download.svg'
import Instagram from '@/icons/instagram.svg'
import Linkedin from '@/icons/linkedin.svg'
import Twitter from '@/icons/twitter.svg'
import Location from '@/icons/location.svg'
import Github from '@/icons/github.svg'
import Whatsapp from '@/icons/whatsapp.svg'
import Email from '@/icons/email.svg'
import { Badge } from "@/components/badge";
import { SocialLink } from "@/components/social-link";
import { StickyNote } from "@/components/sticky-note";
import { NavMenu } from "@/components/nav-menu";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Section } from "@/components/section";
import { PortfolioItem } from "@/components/portfolio-item";
import { Obfuscate } from '@/components/obfuscate';
import { HeroMagazine } from '@/components/hero-magazine';
import { DragToggle } from "@/components/drag-toggle";

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
} as const;

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
} as const;

export default function Home() {
  const reasonsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <NavMenu />
      <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-12 pb-24">
        <DragToggle />

        {/* HERO */}
        <HeroMagazine />

        {/* 5 REASONS TO HIRE ME */}
        <Section id="reasons" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 200, }}>
          <div ref={reasonsRef} className="flex flex-col gap-10 items-center w-full max-w-5xl mx-auto my-24">
            <div className="text-center mb-12">
              <SectionHeading title="5 Reasons to Work With Me" showLines />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full px-4">
              <StickyNote color="blue" rotate={-2} className="!w-full h-full flex flex-col justify-start" constraintsRef={reasonsRef}>
                <div className="text-5xl font-bold font-mono text-white -mt-2 -ml-2 mb-2">01</div>
                <h3 className="text-2xl font-bold mb-3">I Care About the &quot;Why&quot;</h3>
                <p className="text-lg">I&apos;m not here just to take instructions and disappear. I actually care about whether the code I write makes sense for your business. If a feature feels like it’s being built for the wrong reasons, I’ll tell you. I’m here to build things that matter.</p>
              </StickyNote>

              <StickyNote color="green" rotate={3} className="!w-full h-full flex flex-col justify-start" constraintsRef={reasonsRef}>
                <div className="text-5xl font-bold font-mono text-white -mt-2 -ml-2 mb-2">02</div>
                <h3 className="text-2xl font-bold mb-3">The Quality Gatekeeper</h3>
                <p className="text-lg">I bring a level of seriousness and &apos;detailedness&apos; across Android, Web, and Backend. I act as an uncompromising gatekeeper, ensuring that nothing &apos;shabby&apos; ever leaves our gate. I ensure every layer is polished to a high technical standard.</p>
              </StickyNote>

              <StickyNote color="yellow" rotate={-1} className="!w-full h-full flex flex-col justify-start" constraintsRef={reasonsRef}>
                <div className="text-5xl font-bold font-mono text-white -mt-2 -ml-2 mb-2">03</div>
                <h3 className="text-2xl font-bold mb-3">Architectural Elegance</h3>
                <p className="text-lg">I don&apos;t just solve problems; I build systems with distinct coding patterns and a highly technical style. My goal is to write code that is so elegant and clear that anyone who looks at it today (or years later) will value its clarity.</p>
              </StickyNote>

              <div className="md:col-span-2 lg:col-span-2 lg:col-start-1 flex justify-end lg:justify-center w-full">
                <StickyNote color="purple" rotate={2} className="!w-full sm:w-2/3 lg:w-3/4 h-full flex flex-col justify-start" constraintsRef={reasonsRef}>
                  <div className="text-5xl font-bold font-mono text-white -mt-2 -ml-2 mb-2">04</div>
                  <h3 className="text-2xl font-bold mb-3">Unwavering Presence</h3>
                  <p className="text-lg">My determination and attention to detail define the pulse of every team I join. I don’t just contribute to standups; I help drive the momentum. It&apos;s hard to imagine the project moving forward without the presence and focus I bring to every task.</p>
                </StickyNote>
              </div>

              <div className="md:col-span-2 lg:col-span-1 flex justify-start w-full">
                <StickyNote color="orange" rotate={-3} className="!w-full h-full flex flex-col justify-start" constraintsRef={reasonsRef}>
                  <div className="text-5xl font-bold font-mono text-white -mt-2 -ml-2 mb-2">05</div>
                  <h3 className="text-2xl font-bold mb-3">A True Force Multiplier</h3>
                  <p className="text-lg">I invest deeply in my colleagues and mentees. By providing the support and guidance others need to succeed, I leave a lasting impact on the team culture. I am a presence that is deeply felt because I bring out the best in the people around me.</p>
                </StickyNote>
              </div>
            </div>
          </div>
        </Section>

        {/* SELECTED WORK */}
        <Section id="work" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 200, }}>
          <div className="flex flex-col gap-10 items-center w-full">
            <div className="text-center mb-8">
              <SectionHeading title="Selected Work" showLines />
            </div>

            <div className="grid gap-24 w-full max-w-4xl">

              {/* Alajo */}
              <PortfolioItem
                title="Alajo"
                subtitle="Senior Backend Engineer · 2025–Present"
                link="https://alajo.app"
                showHapticks
                problem={{
                  color: "purple",
                  rotate: -8,
                  text: "A savings platform handling real agents and real money — needed an engine with zero tolerance for errors and 100% auditability."
                }}
                built={{
                  color: "green",
                  rotate: 6,
                  text: "Standardised the codebase with event-driven architecture and a Generic Repository. Built the validation service and the eligibility + interest engines behind Alajo's Savings Plans and Marketplace."
                }}
                impact={{
                  color: "yellow",
                  rotate: -2,
                  title: "₦500k/month · 30% faster",
                  text: "Agent collections fully auditable. Feature development time cut by 30%. Sub-second response times across 600+ live transactions."
                }}
                stack={["NestJS", "Sequelize", "MySQL", "Node.js", "TypeScript"]}
              />

              {/* Virtual Soul Clinic */}
              <PortfolioItem
                title="The Virtual Soul Clinic"
                subtitle="Technology Consultant (Volunteer) · 2025–Present"
                showHapticks
                problem={{
                  color: "green",
                  rotate: -2,
                  text: "A mental wellness organisation running coaching sessions on outdated processes — cancelled sessions, manual scheduling, no visibility into programme effectiveness."
                }}
                built={{
                  color: "blue",
                  rotate: 1,
                  text: "Coach availability + substitution system, shared Zoom infrastructure integration, a programme metrics dashboard, and post-session feedback collection."
                }}
                impact={{
                  color: "orange",
                  rotate: -1,
                  title: "~$3,000/yr saved",
                  text: "20+ Zoom licenses consolidated. Cancelled sessions dramatically reduced. Coaching effectiveness now measurable."
                }}
                stack={["Node.js", "Zoom API", "TypeScript"]}
              />
              {/* Veesitor */}
              <PortfolioItem
                title="Veesitor"
                subtitle="CTO · Aug 2024 – Jan 2026"
                link="https://veesitor.com"
                showHapticks
                problem={{
                  color: "yellow",
                  rotate: -3,
                  text: "Estate management in Nigeria was manual — WhatsApp groups, paper receipts, missed payments. Communities deserved better infrastructure."
                }}
                built={{
                  color: "purple",
                  rotate: 2,
                  text: "Led the product from zero to launch. Access code generation, automated resident reminders, flexible dues collection across property types, and a waste-to-wealth recycling rewards system."
                }}
                impact={{
                  color: "green",
                  rotate: -1,
                  title: "0 → live platform",
                  text: "Estate managers and residents actively using the platform. Features validated against real-world workflows from day one."
                }}
                stack={["NestJS", "Node.js", "MySQL", "TypeScript"]}
              />

              {/* AgricTrail */}
              <PortfolioItem
                title="AgricTrail"
                subtitle="Co-Founder & CTO · 2023–2025"
                link="https://agrictrail.com"
                showHapticks
                problem={{
                  color: "orange",
                  rotate: 3,
                  text: "Smallholder farmers were managing finances on paper or not at all — no visibility into profitability, costs, or performance over time."
                }}
                built={{
                  color: "blue",
                  rotate: -1,
                  text: "Designed and built the entire app from scratch — product design, frontend, and backend. Farm record-keeping, financial analysis, automated cost calculations, depreciation tracking, and profitability analysis."
                }}
                impact={{
                  color: "yellow",
                  rotate: 2,
                  title: "Built end-to-end solo",
                  text: "Farmers can now track their entire operation digitally — from planting costs to harvest profitability — in one place."
                }}
                stack={["NestJS", "Node.js", "MongoDB", "Vue.js"]}
              />

              {/* Prodeegi */}
              <PortfolioItem
                title="Prodeegi"
                subtitle="CTO · Jul 2024 – Jan 2026"
                link="https://prodeegi.com"
                showHapticks
                problem={{
                  color: "blue",
                  rotate: -2,
                  text: "African businesses needed serious technical partners — not just freelancers. They needed strategy, architecture, and delivery under one roof."
                }}
                built={{
                  color: "cooler",
                  rotate: 3,
                  title: "What I built",
                  text: "Led full product lifecycles for a digital agency serving clients across Africa. Managed and mentored a team of developers and designers. Enforced security best practices and performance standards throughout."
                }}
                impact={{
                  color: "red",
                  rotate: -1,
                  title: "7+ websites · 1 SaaS",
                  text: "All delivered successfully. High-impact solutions built at minimal infrastructure cost."
                }}
                stack={["NestJS", "Node.js", "Redis", "MySQL", "React.js"]}
              />

              {/* Noja360 */}
              <PortfolioItem
                title="Noja360"
                subtitle="Software Engineer · 2020–2024"
                link="https://noja360.com"
                showHapticks
                problem={{
                  color: "cooler",
                  rotate: 2,
                  text: "A growing platform needed a business intelligence engine that could keep up with thousands of users — and give the product team real visibility into customer behaviour."
                }}
                built={{
                  color: "purple",
                  rotate: -1,
                  text: "Built the BI engine and reporting system, led feature development, implemented event systems and cron jobs, and mentored interns across 4 years of continuous product growth."
                }}
                impact={{
                  color: "yellow",
                  rotate: 2,
                  title: "10,000+ users powered",
                  text: "Four years of compounding impact — shipping features, building culture, and helping the platform scale."
                }}
                stack={["Node.js", "Vue.js", "PHP", "Laravel"]}
              />

            </div>
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 200, }}>
          <div ref={aboutRef} className="flex flex-col gap-10 items-center w-full max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <SectionHeading title="About" showLines />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start h-full gap-8">
                <StickyNote rotate={3} className="!w-fit !p-2 !pb-8 bg-white shadow-xl flex flex-col items-center" constraintsRef={aboutRef}>
                  <Image src="/about.jpg" alt="Busola Okeowo" width={600} height={800} className="object-cover w-full aspect-[4/5] lg:aspect-[4/8]" style={{ objectPosition: 'top' }} />
                  <div className="mt-4 font-bold text-gray-700 text-lg uppercase tracking-wide font-mono flex items-center gap-2">
                    Hi, I&apos;m Busola
                  </div>
                  <div className="text-gray-500 font-mono text-sm flex items-center gap-1 mt-1">
                    <Location className="w-4 h-4 stroke-gray-500 stroke-[5px]" /> Lagos, Nigeria
                  </div>
                </StickyNote>

                <div className="flex flex-col items-center lg:items-start gap-6 w-full md:px-4 lg:px-0">


                  {/* Download Resume Button */}
                  <a href="/Busola-Okeowo-Resume-March-2026.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-black px-8 py-4 rounded-xl font-bold font-mono tracking-widest hover:scale-105 hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_#facc15] w-full justify-center">
                    <Download className="w-5 h-5 stroke-white stroke-[4px]" />
                    <span>DOWNLOAD RESUME</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <StickyNote color="blue" rotate={-1} className="!w-full" constraintsRef={aboutRef}>
                    <p className="text-lg">I&apos;m a Full Stack Engineer who&apos;s spent most of my career close to the product — not just writing code, but understanding why it matters. I&apos;ve been a CTO twice, a co-founder once, and an engineer at every stage in between.</p>
                  </StickyNote>

                  <StickyNote color="yellow" rotate={2} className="!w-full" constraintsRef={aboutRef}>
                    <p className="text-lg">I specialise in backend systems: the kind that handle money, manage access, and have to work correctly every single time. When I&apos;m not building, I&apos;m teaching.</p>
                  </StickyNote>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">experience</div>
                    <div className="text-xl font-bold">6+ years building web solutions</div>
                  </div>
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">leadership</div>
                    <div className="text-xl font-bold">2× CTO, 1× Co-Founder</div>
                  </div>
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">currently at</div>
                    <div className="text-xl font-bold">Alajo Technologies</div>
                  </div>
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">based in</div>
                    <div className="text-xl font-bold">Lagos, Nigeria 🇳🇬</div>
                  </div>
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">education</div>
                    <div className="text-xl font-bold">BSc. Industrial Mathematics — UNILAG</div>
                  </div>
                  <div className="pl-4 border-l-4 border-black">
                    <div className="font-bold text-gray-600 uppercase text-sm mb-1">also loves</div>
                    <div className="text-xl font-bold">Teaching web development 🏫</div>
                  </div>
                </div>

                <StickyNote color="yellow" rotate={-2} className="!w-full mt-4" constraintsRef={aboutRef}>
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-bold text-lg">Microsoft Leap Hackathon — Winner, 2019</div>
                  <p>Built a market access tool for farmers</p>
                </StickyNote>
              </div>
            </div>

          </div>
        </Section>

        <Section id="testimonials" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 200, }}>
          <div className="flex flex-col gap-10 items-center w-full max-w-6xl mx-auto my-24">
            <div className="text-center mb-8">
              <SectionHeading title="What Colleagues Say" showLines />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-4 items-stretch">
              {/* Testimonial 1 - Feranmi */}
              <div className="bg-white border-4 border-black rounded-[20px] p-8 shadow-[6px_6px_0px_#3b82f6] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold font-mono text-gray-800 mb-6">&quot;It’s been amazing seeing your work, your determination, and your attention to detail. You’ve been such a presence that it’s hard to imagine our team standups without you.&quot;</p>
                <div className="text-left w-full mt-auto">
                  <div className="font-bold text-black uppercase tracking-widest text-xs">— Feranmi</div>
                  <div className="text-gray-600 text-xs mt-1 uppercase font-mono tracking-tighter">Software Engineer</div>
                </div>
              </div>

              {/* Testimonial 2 - Lekan */}
              <div className="bg-white border-4 border-black rounded-[20px] p-8 shadow-[6px_6px_0px_#10b981] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold font-mono text-gray-800 mb-6">&quot;Your work on our codebase was truly impressive, showing distinct coding patterns and a highly technical style. Anyone who looks at our code today would comment on its elegance.&quot;</p>
                <div className="text-left w-full mt-auto">
                  <div className="font-bold text-black uppercase tracking-widest text-xs">— Lekan</div>
                  <div className="text-gray-600 text-xs mt-1 uppercase font-mono tracking-tighter">CTO, SaaS Product</div>
                </div>
              </div>

              {/* Testimonial 3 - Fortune */}
              <div className="bg-white border-4 border-black rounded-[20px] p-8 shadow-[6px_6px_0px_#facc15] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold font-mono text-gray-800 mb-6">&quot;You brought a level of seriousness and &apos;detailedness&apos; to the entire team—across Android, web, and backend. You acted as a vital gatekeeper, ensuring that nothing &apos;shabby&apos; was ever released.&quot;</p>
                <div className="text-left w-full mt-auto">
                  <div className="font-bold text-black uppercase tracking-widest text-xs">— Fortune</div>
                  <div className="text-gray-600 text-xs mt-1 uppercase font-mono tracking-tighter">Software Engineer / Colleague</div>
                </div>
              </div>

              {/* Testimonial 4 - Emmanuel (Spanning check for balance) */}
              <div className="bg-white border-4 border-black rounded-[20px] p-8 shadow-[6px_6px_0px_#f43f5e] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold font-mono text-gray-800 mb-6">&quot;I am truly grateful for the way you helped me throughout my own journey. You have always been there to provide support and guidance over the years.&quot;</p>
                <div className="text-left w-full mt-auto">
                  <div className="font-bold text-black uppercase tracking-widest text-xs">— Emmanuel</div>
                  <div className="text-gray-600 text-xs mt-1 uppercase font-mono tracking-tighter">Colleague / Mentee</div>
                </div>
              </div>

              {/* Testimonial 5 - Dapo */}
              <div className="bg-white border-4 border-black rounded-[20px] p-8 shadow-[6px_6px_0px_#f97316] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold font-mono text-gray-800 mb-6">&quot;I really enjoyed learning from you. Out of all the colleagues I have worked with, your departure is the most deeply felt.&quot;</p>
                <div className="text-left w-full mt-auto">
                  <div className="font-bold text-black uppercase tracking-widest text-xs">— Dapo</div>
                  <div className="text-gray-600 text-xs mt-1 uppercase font-mono tracking-tighter">Software Engineer / Colleague</div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" visible={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }} hidden={{ opacity: 0, scale: 0.7, y: 500, }}>
          <div className="flex flex-col gap-12 items-center text-center mt-12 w-full">
            <div>
              <SectionHeading title="Let's talk" showLines />
            </div>

            <p className="text-2xl font-bold">Want to work together or just talk shop? I&apos;m easy to reach.</p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8 lg:gap-12 mt-12 w-full px-4 text-center">

              {/* Email Card */}
              <div className="group relative w-full md:w-[300px]">
                {/* 3D background */}
                <div className="absolute inset-0 bg-yellow-300 rounded-[30px] translate-y-2 translate-x-2 transition-transform duration-300 ease-out group-hover:translate-y-4 group-hover:translate-x-4 border-4 border-black"></div>
                {/* Card front */}
                <div className="relative h-full bg-white border-4 border-black rounded-[30px] p-8 flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-yellow-100 border-2 border-black rounded-full flex items-center justify-center mb-2 rotate-[-5deg] group-hover:rotate-[5deg] transition-transform duration-300">
                    <Email className="w-8 h-8 stroke-black stroke-[2px]" />
                  </div>
                  <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">Drop a line</div>
                  <div className="text-base md:text-lg font-bold font-mono tracking-tight group-hover:text-blue-600 transition-colors">
                    <Obfuscate
                      email="busolawritescode@gmail.com"
                      headers={{
                        subject: 'Hello from the internet!',
                        body: 'Hi Busola,\n\nI just saw your site and...',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a href="https://linkedin.com/in/she-writescode" target="_blank" rel="noreferrer" className="group relative w-full md:w-[300px] block cursor-pointer">
                <div className="absolute inset-0 bg-blue-400 rounded-[30px] translate-y-2 translate-x-2 transition-transform duration-300 ease-out group-hover:translate-y-4 group-hover:translate-x-4 border-4 border-black"></div>
                <div className="relative h-full bg-white border-4 border-black rounded-[30px] p-8 flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-blue-100 border-2 border-black rounded-full flex items-center justify-center mb-2 rotate-[5deg] group-hover:rotate-[-5deg] transition-transform duration-300">
                    <Linkedin className="w-8 h-8 stroke-blue-600 stroke-[5px]" />
                  </div>
                  <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">Connect</div>
                  <div className="text-xl md:text-2xl font-bold font-mono tracking-tight group-hover:text-blue-600 transition-colors">
                    she-writescode
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a href="https://github.com/she-writescode" target="_blank" rel="noreferrer" className="group relative w-full md:w-[300px] block cursor-pointer">
                <div className="absolute inset-0 bg-gray-400 rounded-[30px] translate-y-2 translate-x-2 transition-transform duration-300 ease-out group-hover:translate-y-4 group-hover:translate-x-4 border-4 border-black"></div>
                <div className="relative h-full bg-white border-4 border-black rounded-[30px] p-8 flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gray-100 border-2 border-black rounded-full flex items-center justify-center mb-2 rotate-[-5deg] group-hover:rotate-[5deg] transition-transform duration-300">
                    <Github className="w-8 h-8 stroke-gray-900 stroke-[5px]" />
                  </div>
                  <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">Review code</div>
                  <div className="text-xl md:text-2xl font-bold font-mono tracking-tight group-hover:text-gray-600 transition-colors">
                    she-writescode
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              {/* WhatsApp Card */}
              <Obfuscate href="https://wa.me/2348026910113?text=Hi%20Busola!%20I%20just%20saw%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" className="group relative w-full md:w-[300px] block cursor-pointer">
                <div className="absolute inset-0 bg-green-400 rounded-[30px] translate-y-2 translate-x-2 transition-transform duration-300 ease-out group-hover:translate-y-4 group-hover:translate-x-4 border-4 border-black"></div>
                <div className="relative h-full bg-white border-4 border-black rounded-[30px] p-8 flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-green-100 border-2 border-black rounded-full flex items-center justify-center mb-2 rotate-[5deg] group-hover:rotate-[-5deg] transition-transform duration-300">
                    <Whatsapp className="w-8 h-8 stroke-green-600 stroke-[2px]" />
                  </div>
                  <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">Say Hello</div>
                  <div className="text-xl md:text-2xl font-bold font-mono tracking-tight group-hover:text-green-600 transition-colors">
                    WhatsApp
                  </div>
                </div>
              </Obfuscate>
            </div>
          </div>
        </Section>

        <footer className="mt-32 text-gray-500 font-mono text-sm text-center">
          Made with ❤️ by Busola Okeowo
        </footer>
      </main>
    </>
  );
}

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
import { SocialLink } from "@/components/social-link";
import { StickyNote } from "@/components/sticky-note";
import { NavMenu } from "@/components/nav-menu";
import { MotionConfig, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Hapticks } from "@/components/haptick";
import { Section } from "@/components/section";
import { PortfolioItem } from "@/components/portfolio-item";
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import { HeroMagazine } from '@/components/hero-magazine';

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
      <main className="flex min-h-screen flex-col items-center justify-between px-12 pb-24">

        {/* HERO */}
        <HeroMagazine />

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
          <div className="flex flex-col gap-10 items-center w-full max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <SectionHeading title="About" showLines />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start h-full">
                <StickyNote rotate={3} className="!w-fit !p-2 !pb-8 bg-white shadow-xl flex flex-col items-center">
                  <img src="/about.jpg" alt="Busola Okeowo" className="object-cover w-full  aspect-[4/5] lg:aspect-[4/8]" style={{ objectPosition: 'top' }} />
                  <div className="mt-4 font-bold text-gray-700 text-lg uppercase tracking-wide font-mono">Hi, I'm Busola</div>
                </StickyNote>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <StickyNote color="blue" rotate={-1} className="!w-full">
                    <p className="text-lg">I'm a Full Stack Engineer who's spent most of my career close to the product — not just writing code, but understanding why it matters. I've been a CTO twice, a co-founder once, and an engineer at every stage in between.</p>
                  </StickyNote>

                  <StickyNote color="yellow" rotate={2} className="!w-full">
                    <p className="text-lg">I specialise in backend systems: the kind that handle money, manage access, and have to work correctly every single time. When I'm not building, I'm teaching.</p>
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

                <StickyNote color="yellow" rotate={-2} className="!w-full mt-4">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="font-bold text-lg">Microsoft Leap Hackathon — Winner, 2019</div>
                  <p>Built a market access tool for farmers</p>
                </StickyNote>
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

            <p className="text-2xl font-bold">Want to work together or just talk shop? I'm easy to reach.</p>

            <div className="flex flex-col items-center gap-8 mt-4">
              <div className="flex flex-col items-center gap-2">
                <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">email</div>
                <div className="text-3xl font-bold">
                  <Obfuscate
                    email="busolaokemoney@gmail.com"
                    headers={{
                      body: 'Hello Busola,\nHow are you doing today? ',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">linkedin</div>
                <a href="https://linkedin.com/in/she-writescode" target="_blank" className="text-2xl font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">she-writescode</a>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="font-bold text-gray-500 uppercase tracking-widest text-sm">github</div>
                <a href="https://github.com/she-writescode" target="_blank" className="text-2xl font-bold border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors">she-writescode</a>
              </div>
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

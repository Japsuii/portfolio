"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
};

const itemUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function RevealOnView({ children, className = "", variants = itemUp }: { children: React.ReactNode; className?: string; variants?: Variants; }) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2, once: false }}
        >
            {children}
        </motion.div>
    );
}

type Project = {
    title: string;
    summary: string;
    stack: string[];
    details?: string[];
    deployment?: string;
    image: string;
};

const projects: Project[] = [
    {
        title: "Library Management System",
        summary: "End-to-end library system for cataloging, lending, and returns.",
        stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        details: [
            "Patron registration, book inventory, and loan tracking",
            "Search, pagination, and role-based access for admins/staff"
        ],
        image: "https://cdn.prod.website-files.com/604a97c70aee09eed25ce991/61897a35583a9b51db018d3e_MartinPublicSeating-97560-Importance-School-Library-blogbanner1.jpg", // provided library image
    },
    {
        title: "Fingerprint Door Lock System",
        summary: "Hardware-integrated access control with biometric authentication.",
        stack: ["Java", "MySQL", "Arduino Uno", "Fingerprint Scanner"],
        details: [
            "Enroll, match, and log entries with audit trail",
            "Serial comms between Java app and Arduino for lock control",
            "Integrated alarm for unauthorized access or door left open",
            "Automated email notifications to admin on door events",
            "Infrared sensor to detect open/closed door state"
        ],
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop", // biometric fingerprint/door tech
    },
    {
        title: "Coffee Shop Website & POS",
        summary: "Omnichannel coffee shop presence with web ordering and in-store POS.",
        stack: ["Next.js", "React", "Tailwind CSS", "MongoDB", "MongoDB Atlas", "Electron", "Thermal POS", "Firebase OTP", "PayMongo", "Vercel"],
        details: [
            "Web menu, cart, and checkout with PayMongo integration",
            "Electron-based POS with thermal receipt printing",
            "Account login and verification leveraging Firebase OTP",
        ],
        deployment: "Next.js site deployed on Vercel; database hosted on MongoDB Atlas",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1600&auto=format&fit=crop", // coffee shop counter
    },
    {
        title: "3JSHOP E‑commerce (Online Clothing Store)",
        summary: "Storefront with product catalog, cart, and order management.",
        stack: ["HTML", "Bootstrap", "CSS", "JavaScript", "PHP", "MySQL"],
        details: [
            "Product listings, categories, and basic checkout flow",
            "Admin tools for inventory and order status updates"
        ],
        image: "https://media.istockphoto.com/id/1210584470/photo/menswear-store.jpg?s=612x612&w=0&k=20&c=8YjvKhiJjOlm7APvfmdpkAfn7Xm1xy0niLhMkcHvc84=", // provided clothing image
    }
];

export default function Projects() {
    return (
        <div className="bg-[#e8e8e8] min-h-screen w-full montserrat">
            <main className="px-0 lg:px-15 pt-8 lg:pt-20 pb-16">
                <div className="w-full mx-auto px-8 sm:px-12 lg:px-15">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#87C16B]">Projects</h1>
                    <p className="mt-2 text-[#37353E]">Selected works across web, systems, and hardware.</p>

                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.2, once: false }}
                        className="mt-8 space-y-6"
                    >
                        {projects.map((p, idx) => (
                            <RevealOnView key={p.title}>
                                <div className="text-[#37353E]">
                                    <div className="grid grid-cols-1 gap-6 items-start md:flex md:flex-row">
                                        <div className={(idx % 2 === 1 ? "md:order-2 " : "md:order-1 ") + "md:basis-3/5 p-3 sm:p-4 rounded-[22px] bg-[#e8e8e8] shadow-[20px_20px_30px_#bebebe,-20px_-20px_30px_#ffffff]"}>
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-[18px]"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className={(idx % 2 === 1 ? "md:order-1 " : "md:order-2 ") + "md:basis-2/5"}>
                                            <h2 className="text-lg md:text-xl font-semibold text-[#87C16B]">{p.title}</h2>
                                            <p className="mt-1 text-sm leading-relaxed">{p.summary}</p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {p.stack.map((tech) => (
                                                    <span key={tech} className="text-xs sm:text-[13px] px-3 py-1 rounded-full border border-[#d0d0d0]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            {p.details?.length ? (
                                                <ul className="mt-4 space-y-2 text-sm">
                                                    {p.details.map((d) => (
                                                        <li key={d} className="relative pl-7 leading-relaxed">
                                                            <span className="absolute left-0 top-2 block w-2.5 h-2.5 rotate-45 bg-[#d9d9d9] rounded-[2px]" />
                                                            {d}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}

                                            {p.deployment ? (
                                                <p className="mt-4 text-xs text-[#4a4950]">
                                                    <span className="font-semibold text-[#37353E]">Deployment:</span> {p.deployment}
                                                </p>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </RevealOnView>
                        ))}
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
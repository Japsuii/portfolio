"use client";

import React from "react";
import { useState, useCallback } from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const itemUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function RevealOnView({ children, className = "", variants = itemUp }: { children: React.ReactNode; className?: string; variants?: Variants; }) {
    return (
        <motion.div className={className} variants={variants} initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: false }}>
            {children}
        </motion.div>
    );
}

export default function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus(null);
        setIsSending(true);
        try {
            const form = e.currentTarget;
            const formData = new FormData(form);

            // Web3Forms expects an access_key field and will accept regular form fields
            formData.append("access_key", "7b8ec434-fb27-4c6d-8b50-06474d12c331");

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const json = await res.json();

            if (!res.ok || json.success === false) {
                const message = json.message || `Form submit failed (${res.status})`;
                throw new Error(message);
            }

            setStatus({ ok: true, msg: json.message || "Message sent successfully." });
            form.reset();
        } catch (err: any) {
            setStatus({ ok: false, msg: err?.message || "Something went wrong." });
        } finally {
            setIsSending(false);
        }
    }, []);

    return (
        <div className="bg-[#e8e8e8] min-h-screen w-full montserrat">
            <main id="contact" className="px-0 lg:px-15 pt-8 lg:pt-20 pb-16">
                <div className="w-full mx-auto px-8 sm:px-12 lg:px-15">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#87C16B]">Get in Touch</h1>
                    <p className="mt-2 text-[#37353E]">Have a project or question? I’ll respond as soon as I can.</p>

                    <RevealOnView className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Info left */}
                            <div className="text-[#37353E] space-y-3">
                                <h2 className="text-lg md:text-xl font-semibold text-[#87C16B]">Contact Details</h2>
                                <p className="text-sm">Email: <a href="mailto:johnmasahiroshirai@gmail.com" className="underline decoration-[#87C16B] underline-offset-4">johnmasahiroshirai@gmail.com</a></p>
                                <p className="text-sm">Phone Number: +639150323682</p>
                                <p className="text-sm">Available for freelance and full-time opportunities.</p>

                                <div className="pt-2">
                                    <h3 className="text-sm font-semibold text-[#87C16B]">Socials</h3>
                                    <div className="mt-2 flex items-center gap-3">
                                        <a href="https://www.facebook.com/Shirai.babalu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center gap-2 px-3 py-2 rounded-[14px] bg-[#e8e8e8] shadow-[6px_6px_12px_#d0d0d0,-6px_-6px_12px_#ffffff] text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#1877F2"><path d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 5.02 3.66 9.19 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.75 8.44-4.92 8.44-9.94Z"/></svg>
                                            <span>Facebook</span>
                                        </a>
                                        <a href="https://t.me/japsui" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="flex items-center gap-2 px-3 py-2 rounded-[14px] bg-[#e8e8e8] shadow-[6px_6px_12px_#d0d0d0,-6px_-6px_12px_#ffffff] text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#229ED9"><path d="M9.036 15.47l-.375 5.28c.537 0 .769-.231 1.046-.507l2.51-2.41 5.205 3.814c.954.53 1.63.252 1.893-.883l3.43-16.06h.001c.304-1.418-.513-1.972-1.45-1.626L1.22 9.42C-.162 9.956-.14 10.74 1 11.093l5.38 1.679 12.5-7.9c.588-.357 1.124-.16.683.197"/></svg>
                                            <span>Telegram</span>
                                        </a>
                                        <a href="mailto:johnmasahiroshirai@gmail.com" aria-label="Gmail" className="flex items-center gap-2 px-3 py-2 rounded-[14px] bg-[#e8e8e8] shadow-[6px_6px_12px_#d0d0d0,-6px_-6px_12px_#ffffff] text-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="#EA4335" d="M12 13.5L2 7.5V18a2 2 0 0 0 2 2h4v-7l4 2.5 4-2.5v7h4a2 2 0 0 0 2-2V7.5l-10 6z"/><path fill="#FBBC05" d="M22 6.5v1L12 13.5 2 7.5v-1l10 6z"/><path fill="#34A853" d="M6 20v-7l-4-2.5V18a2 2 0 0 0 2 2h2z"/><path fill="#4285F4" d="M18 20h2a2 2 0 0 0 2-2v-8.5L18 13v7z"/><path fill="#C5221F" d="M22 6a2 2 0 0 0-3.2-1.6L12 9.5 5.2 4.4A2 2 0 0 0 2 6v1.5l10 6 10-6V6z"/></svg>
                                            <span>Gmail</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Form right */}
                            <form onSubmit={handleSubmit} className="rounded-[22px] bg-[#e8e8e8] p-6 sm:p-7 md:p-8 shadow-[20px_20px_30px_#bebebe,-20px_-20px_30px_#ffffff] text-[#37353E]">
                                <div className="grid grid-cols-1 gap-4">
                                    <label className="text-sm">
                                        <span className="block mb-1">Name</span>
                                        <input name="from_name" type="text" required className="w-full rounded-[14px] bg-[#e8e8e8] px-4 py-3 outline-none shadow-[inset_6px_6px_12px_#d0d0d0,inset_-6px_-6px_12px_#ffffff]" placeholder="Your name" />
                                    </label>
                                    <label className="text-sm">
                                        <span className="block mb-1">Email</span>
                                        <input name="reply_to" type="email" required className="w-full rounded-[14px] bg-[#e8e8e8] px-4 py-3 outline-none shadow-[inset_6px_6px_12px_#d0d0d0,inset_-6px_-6px_12px_#ffffff]" placeholder="you@example.com" />
                                    </label>
                                    <label className="text-sm">
                                        <span className="block mb-1">Message</span>
                                        <textarea name="message" required rows={5} className="w-full rounded-[14px] bg-[#e8e8e8] px-4 py-3 outline-none shadow-[inset_6px_6px_12px_#d0d0d0,inset_-6px_-6px_12px_#ffffff]" placeholder="How can I help?" />
                                    </label>

                                    {status ? (
                                        <div className={"text-sm mt-1 " + (status.ok ? "text-green-700" : "text-red-600")}>{status.msg}</div>
                                    ) : null}

                                    <button type="submit" disabled={isSending} className="mt-3 relative bg-[#87C16B] text-white font-medium text-[15px] px-5 py-3 rounded-[12px] shadow-[inset_0_0_1.6em_-0.6em_#3C464B] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed">
                                        {isSending ? "Sending..." : "Send Message"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </RevealOnView>
                </div>
            </main>
        </div>
    );
}

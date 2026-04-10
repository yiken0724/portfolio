import Link from 'next/link';
import {
  ArrowRight, Download, Github, Linkedin, Mail,
  Cpu, Database, Code2, Sparkles, ChevronRight,
  GraduationCap, Building2,
} from 'lucide-react';
import { personalInfo, skills, projects, experience } from '@/lib/data';
import ProjectCard from '@/components/ProjectCard';

const socialLinks = [
  { href: personalInfo.github,   icon: Github,   label: 'GitHub'   },
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
];

const skillCategories = [
  { icon: Cpu,      label: 'ML & Data Science',       items: skills.ml.slice(0, 10),                              color: 'text-cyan-400',    border: 'border-cyan-500/20'    },
  { icon: Database, label: 'Cloud, BI & Databases',   items: [...skills.bi.slice(0, 4), ...skills.cloud.slice(0, 4)], color: 'text-emerald-400', border: 'border-emerald-500/20' },
  { icon: Code2,    label: 'Languages & Engineering', items: [...skills.languages.slice(0, 6), ...skills.engineering.slice(0, 4)], color: 'text-violet-400', border: 'border-violet-500/20' },
];

const featuredProjects = projects.filter(p => p.featured);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Glow blobs */}
        <div className="hero-glow top-1/4 -left-40" />
        <div className="hero-glow bottom-0 right-0 opacity-50" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-emerald-400">Open to new opportunities</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 animate-slide-up delay-100">
              <span className="text-slate-100">Hi, I'm </span>
              <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              <span className="block text-slate-100 mt-1">
                {personalInfo.title.split(' ')[0]}&nbsp;
                <span className="text-cyan-400">{personalInfo.title.split(' ').slice(1).join(' ')}</span>
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-4 animate-slide-up delay-200">
              {personalInfo.tagline}
            </p>

            {/* Bio */}
            <p className="text-slate-500 leading-relaxed mb-10 max-w-2xl animate-slide-up delay-300">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12 animate-slide-up delay-400">
              <Link href="/projects" className="btn-primary">
                View My Work <ArrowRight size={14} />
              </Link>
              <a href={personalInfo.resume} className="btn-outline" target="_blank" rel="noopener noreferrer">
                <Download size={14} /> Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-1 animate-fade-in delay-500">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
              <span className="ml-3 text-sm text-slate-600 font-mono">{personalInfo.email}</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float opacity-40">
          <span className="text-xs text-slate-600 font-mono">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </div>
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────────── */}
      <section className="py-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <p className="section-label mb-3">Expertise</p>
            <h2 className="text-3xl font-bold text-slate-100">What I Work With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map(({ icon: Icon, label, items, color, border }) => (
              <div key={label} className={`card-glass rounded-xl p-6 border ${border}`}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-slate-800/60 ${color}`}>
                    <Icon size={18} />
                  </div>
                  <h3 className={`font-semibold ${color}`}>{label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────────────────────────── */}
      <section className="py-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Portfolio</p>
              <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
            </div>
            <Link href="/projects" className="hidden sm:flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              All projects <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/projects" className="btn-outline w-full justify-center">
              All projects <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE PREVIEW ───────────────────────────────────── */}
      <section className="py-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="section-label mb-3">Career</p>
              <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
            </div>
            <Link href="/experience" className="hidden sm:flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
              Full timeline <ChevronRight size={14} />
            </Link>
          </div>

          {/* Quick list */}
          <div className="space-y-3">
            {experience.slice(0, 3).map((item, i) => (
              <div
                key={item.id}
                className="card-glass rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-cyan-500/20 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-cyan-400 shrink-0">
                    {item.type === 'Part-time' ? <GraduationCap size={18} /> : <Building2 size={18} />}
                  </div>
                  <div>
                    <p className="font-medium text-slate-100 text-sm">{item.role}</p>
                    <p className="text-cyan-400 text-xs">{item.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500 font-mono sm:text-right">
                  <span>{item.location}</span>
                  <span>{item.period}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:hidden">
            <Link href="/experience" className="btn-outline w-full justify-center">
              Full timeline <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────── */}
      <section id="contact" className="py-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-slate-900/40 border border-cyan-500/10 rounded-2xl" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />

            <div className="relative p-10 sm:p-16 text-center">
              <Sparkles className="text-cyan-400 mx-auto mb-4" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                Let's build something together
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                I'm currently open to full-time roles, contract work, and interesting research collaborations. My inbox is always open — even if it's just to say hi.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                  <Mail size={14} /> Say Hello
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline">
                  <Linkedin size={14} /> Connect on LinkedIn
                </a>
              </div>

              {/* Social grid */}
              <div className="flex justify-center gap-2">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl border border-slate-700/50 text-slate-500 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800/60 transition-all"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

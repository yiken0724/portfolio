import Link from 'next/link';
import { Github, Linkedin, Mail, Braces } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const socialLinks = [
  { href: personalInfo.github,   icon: Github,   label: 'GitHub'   },
  { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
            <Braces size={12} className="text-cyan-400" />
          </div>
          <span className="font-mono text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
            Yi Ken
          </span>
        </Link>

        {/* Socials */}
        <div className="flex items-center gap-1">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-md text-slate-500 hover:text-slate-200 hover:bg-slate-800/60 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Copy */}
        <p className="text-xs text-slate-600 font-mono">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}

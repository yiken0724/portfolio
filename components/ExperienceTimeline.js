'use client';

import { MapPin, Calendar, Briefcase } from 'lucide-react';

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-cyan-500/20 to-transparent" />

      <div className="space-y-10">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="relative pl-12 md:pl-16 animate-slide-in-left"
            style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'both', opacity: 0 }}
          >
            {/* Dot */}
            <div className="absolute left-2 md:left-4 top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-[#050810] group-hover:bg-cyan-400 transition-colors">
              <div className="absolute inset-1 rounded-full bg-cyan-400/50" />
            </div>

            {/* Card */}
            <div className="card-glass rounded-xl p-5 md:p-6 group hover:border-cyan-500/20 transition-all duration-300">
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-slate-100 text-lg leading-tight">
                    {item.role}
                  </h3>
                  <p className="text-cyan-400 font-medium text-sm mt-0.5">{item.company}</p>
                </div>
                <div className="flex flex-col sm:items-end gap-1 shrink-0 text-xs text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={10} />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={10} />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={10} />
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-4">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-cyan-500 mt-1 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {item.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

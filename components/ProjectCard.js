'use client';

import { ExternalLink, Github } from 'lucide-react';
import { categoryColors } from '@/lib/utils';

export default function ProjectCard({ project, index = 0 }) {
  const color = categoryColors[project.category] ?? categoryColors.ML;

  return (
    <article
      className="card-glass rounded-xl p-6 flex flex-col gap-4 group transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both', opacity: 0 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${color.bg} ${color.border} ${color.text}`}>
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-mono px-2 py-0.5 rounded border bg-amber-500/10 border-amber-500/30 text-amber-400">
                featured
              </span>
            )}
            <span className="text-xs text-slate-600 font-mono ml-auto">{project.year}</span>
          </div>
          <h3 className="font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
            {project.title}
          </h3>
        </div>

        {/* Links */}
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-500 hover:text-slate-200 hover:bg-slate-700/50 transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-slate-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/80">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

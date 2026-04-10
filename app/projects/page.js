'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { projects } from '@/lib/data';
import { categoryColors } from '@/lib/utils';
import ProjectCard from '@/components/ProjectCard';

const CATEGORIES = ['All', 'DS/ML', 'Data', 'Software'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery,    setSearchQuery]    = useState('');
  const [sortBy,         setSortBy]         = useState('featured');

  const filtered = useMemo(() => {
    let result = projects;

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some(t => t.toLowerCase().includes(q)),
      );
    }

    if (sortBy === 'featured') result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    if (sortBy === 'year')     result = [...result].sort((a, b) => b.year - a.year);

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const counts = useMemo(
    () => ({
      All:      projects.length,
      'DS/ML':  projects.filter(p => p.category === 'DS/ML').length,
      Data:     projects.filter(p => p.category === 'Data').length,
      Software: projects.filter(p => p.category === 'Software').length,
    }),
    [],
  );

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">All Projects</h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A collection of ML systems, data pipelines, and software tools I've built — from research prototypes to production deployments.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Category filter */}
          <div className="flex items-center gap-2 flex-wrap">
            {CATEGORIES.map(cat => {
              const color = cat === 'All' ? null : categoryColors[cat];
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    active
                      ? cat === 'All'
                        ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                        : `${color.bg} ${color.border} ${color.text}`
                      : 'bg-transparent border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                  }`}
                >
                  {cat}
                  <span className={`ml-1.5 text-xs font-mono ${active ? '' : 'text-slate-600'}`}>
                    {counts[cat]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 sm:ml-auto">
            {/* Search */}
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search projects…"
                className="pl-8 pr-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-colors w-48 sm:w-56"
              />
            </div>

            {/* Sort */}
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal size={14} className="text-slate-500" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500/50 cursor-pointer"
              >
                <option value="featured">Featured first</option>
                <option value="year">Newest first</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-slate-600 font-mono mb-6">
          Showing {filtered.length} of {projects.length} projects
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-slate-400 font-medium">No projects found</p>
            <p className="text-slate-600 text-sm mt-1">Try a different search or filter</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState, useMemo, useEffect } from 'react';
import { Search, X, MapPin, User, Calendar, BookOpen, Hash, StickyNote } from 'lucide-react';
import { modules } from '@/lib/data';

// ── Constants ──────────────────────────────────────────────────────
const FILTERS = [
  { key: 'All', label: 'All'              },
  { key: 'MH',  label: 'Mathematics'     },
  { key: 'SC',  label: 'Computer Science'},
  { key: 'CC',  label: 'Common Core'     },
];
const SEMESTERS = ['All semesters', ...Array.from(new Set(modules.map(m => m.sem)))];

// ── Colour helpers ─────────────────────────────────────────────────
const prefixStyle = {
  MH:    { badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',      dot: 'bg-cyan-400'    },
  SC:    { badge: 'text-violet-400 bg-violet-500/10 border-violet-500/25', dot: 'bg-violet-400'  },
  CC:    { badge: 'text-amber-400 bg-amber-500/10 border-amber-500/25',   dot: 'bg-amber-400'   },
  Other: { badge: 'text-slate-400 bg-slate-700/40 border-slate-600/30',   dot: 'bg-slate-500'   },
};

function gradeStyle(grade) {
  if (!grade || grade === '—')   return 'text-slate-500 bg-transparent border-slate-700/40';
  if (grade === 'PASS')          return 'text-slate-400 bg-slate-800/60 border-slate-600/40';
  if (grade === 'EX')            return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
  if (grade === 'NA')            return 'text-slate-600 bg-slate-800/40 border-slate-700/30';
  if (grade === 'A+')            return 'text-cyan-300  bg-cyan-500/10  border-cyan-500/30';
  if (grade === 'A')             return 'text-cyan-400  bg-cyan-500/10  border-cyan-500/20';
  if (grade === 'A-')            return 'text-teal-300  bg-teal-500/10  border-teal-500/30';
  if (grade === 'B+')            return 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30';
  if (grade === 'B')             return 'text-slate-300 bg-slate-700/30 border-slate-600/30';
  return 'text-slate-400 bg-slate-800/50 border-slate-700/40';
}

// ── Module Card ────────────────────────────────────────────────────
function ModuleCard({ mod, onClick, index }) {
  const ps = prefixStyle[mod.prefix] ?? prefixStyle.Other;
  return (
    <button
      onClick={() => onClick(mod)}
      className="card-glass rounded-xl p-5 text-left w-full group hover:border-slate-600/60 transition-all duration-200 flex flex-col gap-3 animate-fade-in"
      style={{ animationDelay: `${index * 40}ms`, animationFillMode: 'both', opacity: 0 }}
    >
      {/* Top row: code */}
      <div className="flex items-start gap-2">
        <span className={`font-mono text-xs px-2 py-0.5 rounded border ${ps.badge}`}>
          {mod.code}
        </span>
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-slate-200 group-hover:text-white leading-snug transition-colors line-clamp-2">
        {mod.title}
      </p>

      {/* Bottom rows */}
      <div className="mt-auto space-y-1.5">
        {mod.professor && (
          <p className="text-[11px] text-slate-500 truncate flex items-center gap-1">
            <User size={10} className="shrink-0" />
            {mod.professor}
          </p>
        )}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <MapPin size={10} />
            {mod.school}
          </span>
          <span className="font-mono">{mod.sem}</span>
          {mod.au && <span className="font-mono shrink-0">{mod.au} AU</span>}
        </div>
      </div>

      {/* Notes hint */}
      {mod.notes && (
        <div className="flex items-center gap-1 text-[10px] text-cyan-500/60 font-mono">
          <StickyNote size={9} />
          has notes
        </div>
      )}
    </button>
  );
}

// ── Detail Drawer ──────────────────────────────────────────────────
function ModuleDrawer({ mod, onClose }) {
  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!mod) return null;

  const ps = prefixStyle[mod.prefix] ?? prefixStyle.Other;

  const details = [
    { icon: Hash,      label: 'Course Code', value: mod.code     },
    { icon: MapPin,    label: 'Institution', value: mod.school   },
    { icon: Calendar,  label: 'Semester',    value: mod.sem      },
    { icon: User,      label: 'Professor',   value: mod.professor || '—', multiline: true },
    { icon: BookOpen,  label: 'Credit Units',value: mod.au ? `${mod.au} AU` : '—' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#0a0f1e] border-l border-cyan-500/10 z-50 flex flex-col shadow-2xl shadow-black/50 overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 border-b border-slate-800/80">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className={`font-mono text-xs px-2 py-0.5 rounded border ${ps.badge}`}>
                {mod.code}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-slate-100 leading-snug">{mod.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        {/* Details */}
        <div className="p-6 border-b border-slate-800/80">
          <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4">Details</p>
          <dl className="space-y-3">
            {details.map(({ icon: Icon, label, value, multiline }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon size={14} className="text-slate-500 mt-0.5 shrink-0" />
                <div className="flex items-start gap-2 flex-wrap">
                  <dt className="text-xs text-slate-500 w-24 shrink-0 mt-0.5">{label}</dt>
                  <dd className="text-sm text-slate-200 font-mono">
                    {multiline && typeof value === 'string' && value !== '—'
                      ? value.split(',').map((v, i) => (
                          <span key={i} className="block">{v.trim()}</span>
                        ))
                      : value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Notes */}
        <div className="p-6 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <StickyNote size={14} className="text-cyan-400" />
            <p className="text-xs font-mono text-slate-600 uppercase tracking-widest">My Notes</p>
          </div>

          {mod.notes ? (
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-slate-300 leading-relaxed text-sm whitespace-pre-line">{mod.notes}</p>
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-700/50 p-6 text-center">
              <StickyNote size={20} className="text-slate-700 mx-auto mb-2" />
              <p className="text-xs text-slate-600">No notes yet.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function CourseworkPage() {
  const [activePrefix, setActivePrefix] = useState('All');
  const [activeSem,    setActiveSem]    = useState('All semesters');
  const [activeSchool, setActiveSchool] = useState('All');
  const [searchQuery,  setSearchQuery]  = useState('');
  const [selected,     setSelected]     = useState(null);

  // helper: apply search query
  const applySearch = (list) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(m =>
      m.code.toLowerCase().includes(q) ||
      m.title.toLowerCase().includes(q) ||
      (m.professor && m.professor.toLowerCase().includes(q)),
    );
  };

  // full filtered result
  const filtered = useMemo(() => {
    let list = modules;
    if (activePrefix !== 'All')        list = list.filter(m => m.prefix === activePrefix);
    if (activeSem !== 'All semesters') list = list.filter(m => m.sem    === activeSem);
    if (activeSchool !== 'All')        list = list.filter(m => m.school === activeSchool);
    return applySearch(list);
  }, [activePrefix, activeSem, activeSchool, searchQuery]);

  // base lists for contextual counts (each excludes its own dimension)
  const baseForModules = useMemo(() => {
    let list = modules;
    if (activeSem    !== 'All semesters') list = list.filter(m => m.sem    === activeSem);
    if (activeSchool !== 'All')           list = list.filter(m => m.school === activeSchool);
    return applySearch(list);
  }, [activeSem, activeSchool, searchQuery]);

  const baseForSchool = useMemo(() => {
    let list = modules;
    if (activePrefix !== 'All')           list = list.filter(m => m.prefix === activePrefix);
    if (activeSem    !== 'All semesters') list = list.filter(m => m.sem    === activeSem);
    return applySearch(list);
  }, [activePrefix, activeSem, searchQuery]);

  const baseForSem = useMemo(() => {
    let list = modules;
    if (activePrefix !== 'All')  list = list.filter(m => m.prefix === activePrefix);
    if (activeSchool !== 'All')  list = list.filter(m => m.school === activeSchool);
    return applySearch(list);
  }, [activePrefix, activeSchool, searchQuery]);

  // Stats — full dataset
  const totalAU    = modules.filter(m => m.au).reduce((s, m) => s + m.au, 0);
  const allGraded  = modules.filter(m => m.gp !== null && m.au !== null);
  const totalCGPA  = allGraded.length
    ? (allGraded.reduce((s, m) => s + m.gp * m.au, 0) / allGraded.reduce((s, m) => s + m.au, 0)).toFixed(2)
    : '—';

  // Stats — filtered (reactive)
  const selectedAU   = filtered.filter(m => m.au).reduce((s, m) => s + m.au, 0);
  const selGraded    = filtered.filter(m => m.gp !== null && m.au !== null);
  const selectedGPA  = selGraded.length
    ? (selGraded.reduce((s, m) => s + m.gp * m.au, 0) / selGraded.reduce((s, m) => s + m.au, 0)).toFixed(2)
    : '—';

  return (
    <>
      <div className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="mb-10">
            <p className="section-label mb-3">Academic Record</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Coursework</h1>
            <p className="text-slate-400 max-w-xl leading-relaxed">
              {modules.length} modules across NTU and SMU. Click any card to view notes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { label: 'Total AU',    value: totalAU,    sub: 'all modules'     },
              { label: 'Selected AU', value: selectedAU, sub: 'current filters' },
            ].map(({ label, value, sub }) => (
              <div key={label} className="card-glass rounded-xl px-5 py-4">
                <p className="text-2xl font-bold text-cyan-400 font-mono">{value}</p>
                <p className="text-xs text-slate-200 mt-0.5">{label}</p>
                <p className="text-xs text-slate-600 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-3 mb-8">

            {/* ── Mobile dropdowns (hidden on sm+) ── */}
            <div className="flex flex-col gap-2 sm:hidden">
              {[
                {
                  label: 'Modules',
                  value: activePrefix,
                  onChange: setActivePrefix,
                  options: FILTERS.map(({ key, label }) => ({ value: key, label })),
                },
                {
                  label: 'School',
                  value: activeSchool,
                  onChange: setActiveSchool,
                  options: ['All', 'NTU', 'SMU'].map(s => ({ value: s, label: s })),
                },
                {
                  label: 'Semester',
                  value: activeSem,
                  onChange: setActiveSem,
                  options: SEMESTERS.map(s => ({ value: s, label: s === 'All semesters' ? 'All' : s })),
                },
              ].map(({ label, value, onChange, options }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-xs text-slate-600 font-mono w-16 shrink-0">{label}</span>
                  <select
                    value={value}
                    onChange={e => onChange(e.target.value)}
                    className="flex-1 bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300 rounded-md px-3 py-1.5 focus:outline-none focus:border-cyan-500/50 cursor-pointer"
                  >
                    {options.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* ── Desktop button rows (hidden on mobile) ── */}
            <div className="hidden sm:flex flex-col gap-3">
              {/* Modules filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-600 font-mono mr-1 w-16">Modules</span>
                {FILTERS.map(({ key, label }) => {
                  const ps    = prefixStyle[key] ?? prefixStyle.Other;
                  const count = key === 'All' ? baseForModules.length : baseForModules.filter(m => m.prefix === key).length;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePrefix(key)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 ${
                        activePrefix === key
                          ? key === 'All'
                            ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                            : ps.badge
                          : 'bg-transparent border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                      }`}
                    >
                      {label}
                      <span className="ml-1 opacity-50">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* School filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-600 font-mono mr-1 w-16">School</span>
                {['All', 'NTU', 'SMU'].map(s => {
                  const count = s === 'All' ? baseForSchool.length : baseForSchool.filter(m => m.school === s).length;
                  return (
                    <button
                      key={s}
                      onClick={() => setActiveSchool(s)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 ${
                        activeSchool === s
                          ? s === 'SMU'
                            ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300'
                            : 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-transparent border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                      }`}
                    >
                      {s}
                      <span className="ml-1 opacity-50">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Semester filter */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-600 font-mono mr-1 w-16">Semester</span>
                {SEMESTERS.map(s => {
                  const count = s === 'All semesters' ? baseForSem.length : baseForSem.filter(m => m.sem === s).length;
                  return (
                    <button
                      key={s}
                      onClick={() => setActiveSem(s)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all duration-200 ${
                        activeSem === s
                          ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                          : 'bg-transparent border-slate-700/50 text-slate-500 hover:border-slate-600 hover:text-slate-300'
                      }`}
                    >
                      {s === 'All semesters' ? 'All' : s}
                      <span className="ml-1 opacity-50">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search + Clear */}
            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:flex-none">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search code, title, professor…"
                  className="pl-8 pr-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors w-full sm:w-72"
                />
              </div>
              {(activePrefix !== 'All' || activeSem !== 'All semesters' || activeSchool !== 'All' || searchQuery) && (
                <button
                  onClick={() => { setActivePrefix('All'); setActiveSem('All semesters'); setActiveSchool('All'); setSearchQuery(''); }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-slate-400 border border-slate-700/50 hover:text-slate-200 hover:border-slate-600 transition-colors shrink-0"
                >
                  <X size={12} />
                  Clear all
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          <p className="text-xs text-slate-600 font-mono mb-6">
            Showing {filtered.length} of {modules.length} modules
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">📚</p>
              <p className="text-slate-400 font-medium">No modules found</p>
              <button
                onClick={() => { setActivePrefix('All'); setActiveSem('All semesters'); setActiveSchool('All'); setSearchQuery(''); }}
                className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((mod, i) => (
                <ModuleCard key={`${mod.code}-${mod.sem}-${i}`} mod={mod} onClick={setSelected} index={i} />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Drawer */}
      <ModuleDrawer mod={selected} onClose={() => setSelected(null)} />
    </>
  );
}

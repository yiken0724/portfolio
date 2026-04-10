export const categoryColors = {
  'DS/ML':  { bg: 'bg-cyan-500/10',    border: 'border-cyan-500/30',   text: 'text-cyan-400'   },
  Data:     { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30',text: 'text-emerald-400' },
  Software: { bg: 'bg-violet-500/10',  border: 'border-violet-500/30', text: 'text-violet-400'  },
};

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

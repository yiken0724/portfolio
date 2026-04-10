import { GraduationCap, Award, BadgeCheck, ExternalLink } from 'lucide-react';
import { experience, education, skills, personalInfo, certifications } from '@/lib/data';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export const metadata = {
  title: 'Experience',
  description: `Career timeline and background for ${personalInfo.name}.`,
};

const issuerStyle = {
  'DeepLearning.AI': { badge: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400',    dot: 'bg-cyan-400'    },
  'Microsoft':        { badge: 'bg-blue-500/10  border-blue-500/25  text-blue-400',   dot: 'bg-blue-400'    },
  'IBM':              { badge: 'bg-violet-500/10 border-violet-500/25 text-violet-400', dot: 'bg-violet-400' },
  'Google':           { badge: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400', dot: 'bg-emerald-400' },
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-3">Career</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">Experience</h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            My professional journey — from internships in AI and data engineering to teaching assistantships, always working at the intersection of ML, data, and software.
          </p>
        </div>

        {/* Timeline + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-slate-200 mb-8 flex items-center gap-2">
              <span className="w-6 h-px bg-cyan-500/60" />
              Work History
            </h2>
            <ExperienceTimeline items={experience} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">

            {/* Education */}
            <div className="card-glass rounded-xl p-6">
              <h2 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-5">
                <GraduationCap size={16} className="text-cyan-400" />
                Education
              </h2>
              {education.map((edu, i) => (
                <div key={i}>
                  {i > 0 && <hr className="border-slate-700/50 my-4" />}
                  <div className="space-y-1">
                    <p className="font-medium text-slate-100 text-sm leading-snug">{edu.school}</p>
                    <p className="text-cyan-400 text-xs">{edu.degree}</p>
                    <p className="text-slate-500 text-xs font-mono">{edu.period}</p>
                    {edu.gpa && <p className="text-slate-500 text-xs">GPA: {edu.gpa}</p>}
                    {edu.notes && <p className="text-slate-500 text-xs mt-2 leading-relaxed">{edu.notes}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="card-glass rounded-xl p-6">
              <h2 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-5">
                <BadgeCheck size={16} className="text-cyan-400" />
                Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, i) => {
                  const style = issuerStyle[cert.issuer] ?? issuerStyle['Google'];
                  return (
                    <div key={i} className="flex gap-3">
                      <span className={`w-0.5 rounded-full shrink-0 ${style.dot} opacity-70`} />
                      <div className="min-w-0 space-y-0.5 flex-1">
                        <p className="text-xs font-medium text-slate-200 leading-snug">{cert.title}</p>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border ${style.badge}`}>
                              {cert.issuer}
                            </span>
                            <span className="text-[10px] text-slate-600 font-mono">{cert.period}</span>
                          </div>
                          {cert.url && (
                            <a href={cert.url} target="_blank" rel="noopener noreferrer"
                              className="text-slate-600 hover:text-cyan-400 transition-colors shrink-0">
                              <ExternalLink size={11} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills cloud */}
            <div className="card-glass rounded-xl p-6">
              <h2 className="text-sm font-semibold text-slate-300 flex items-center gap-2 mb-5">
                <Award size={16} className="text-cyan-400" />
                Full Skill Set
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'ML & Data Science',   items: skills.ml          },
                  { label: 'Languages',            items: skills.languages   },
                  { label: 'Engineering & Tools',  items: skills.engineering },
                  { label: 'Cloud & BI',           items: [...skills.cloud, ...skills.bi.slice(0, 4)] },
                  { label: 'Databases',            items: skills.databases   },
                ].map(({ label, items }) => (
                  <div key={label}>
                    <p className="text-xs text-slate-600 font-mono mb-2 uppercase tracking-wider">{label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map(skill => (
                        <span key={skill} className="tag text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </aside>
        </div>


      </div>
    </div>
  );
}

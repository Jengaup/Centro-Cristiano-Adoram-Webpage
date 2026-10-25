interface LegalSection {
  heading: string;
  paragraphs: string[];
}

interface LegalPageDict {
  heroEyebrow: string;
  heroTitle: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
}

export default function LegalPageLayout({ dict }: { dict: LegalPageDict }) {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="bg-navy-gradient py-20 pt-32 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-400 text-xs font-black tracking-[0.25em] uppercase mb-4">{dict.heroEyebrow}</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">{dict.heroTitle}</h1>
          <p className="text-navy-300 text-sm">{dict.lastUpdated}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-slate-600 text-base leading-relaxed mb-10">{dict.intro}</p>

        <div className="space-y-10">
          {dict.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-xl font-bold text-navy-900 mb-3">{section.heading}</h2>
              <div className="space-y-3">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

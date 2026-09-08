import { TERMS_AND_CONDITIONS as T } from "../data/policies";

export default function Terms() {
  return (
    <div className="section-pad px-5 md:px-16 max-w-4xl mx-auto">
      <h1 className="font-display text-headline-lg text-primary mb-6">{T.title}</h1>
      <p className="font-body text-body-lg text-on-surface-variant mb-12">{T.intro}</p>

      {T.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="font-display text-headline-sm text-primary mb-3">{section.heading}</h2>
          {section.body.map((p, i) => (
            <p key={i} className="font-body text-body-md text-on-surface-variant mb-2">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}

import { CANCELLATION_POLICY as P } from "../data/policies";

export default function CancellationPolicy() {
  return (
    <div className="section-pad px-5 md:px-16 max-w-4xl mx-auto">
      <h1 className="font-display text-headline-lg text-primary mb-6">{P.title}</h1>
      <p className="font-body text-body-lg text-on-surface-variant mb-12">{P.intro}</p>

      <section className="mb-10">
        <h2 className="font-display text-headline-sm text-primary mb-3">{P.table.title}</h2>
        <p className="font-body text-body-md text-on-surface-variant mb-4">{P.table.note}</p>
        <div className="overflow-x-auto rounded-xl border border-surface-variant">
          <table className="w-full text-left font-body text-body-md">
            <thead className="bg-surface-container-low text-on-surface">
              <tr>
                <th className="px-5 py-3 font-medium">Cancellation Period</th>
                <th className="px-5 py-3 font-medium">Refund</th>
              </tr>
            </thead>
            <tbody>
              {P.table.rows.map((row) => (
                <tr key={row.period} className="border-t border-surface-variant">
                  <td className="px-5 py-3 text-on-surface-variant">{row.period}</td>
                  <td className="px-5 py-3 text-on-surface-variant">{row.refund}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body text-label-sm text-on-surface-variant mt-3">{P.table.footnote}</p>
      </section>

      {P.sections.map((section) => (
        <section key={section.heading} className="mb-10">
          <h2 className="font-display text-headline-sm text-primary mb-3">{section.heading}</h2>
          {section.body.map((p, i) => (
            <p key={i} className="font-body text-body-md text-on-surface-variant mb-2">
              {p}
            </p>
          ))}
          {section.list && (
            <ul className="list-disc pl-6 font-body text-body-md text-on-surface-variant mb-2">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.after &&
            section.after.map((p, i) => (
              <p key={i} className="font-body text-body-md text-on-surface-variant mb-2">
                {p}
              </p>
            ))}
        </section>
      ))}

      <p className="font-body text-label-sm text-on-surface-variant border-t border-surface-variant pt-6">{P.footnote}</p>
    </div>
  );
}

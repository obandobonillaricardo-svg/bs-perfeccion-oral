const REASONS = [
  "15+ años de experiencia clínica",
  "Clínica altamente equipada",
  "Personal altamente calificado",
  "Atención personalizada y cercana",
];

export default function WhyUs() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">Por qué elegirnos</p>
            <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
              Nos importa la estética tanto como la funcionalidad
            </h2>
            <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-steel">
              Somos una clínica odontológica comprometida con brindar
              servicios de alta calidad, atención personalizada y un
              ambiente cómodo y tranquilo a nuestros pacientes.
            </p>
            <a
              href="https://wa.me/573017782398"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-cobalt focus-ring"
            >
              Reserva tu cita
            </a>
          </div>

          <div className="reveal grid grid-cols-2 gap-4" style={{ animationDelay: "120ms" }}>
            {REASONS.map((r) => (
              <div
                key={r}
                className="rounded-2xl border border-ink/10 bg-cloud p-6"
              >
                <span className="smile-line block h-[2px] w-8" />
                <p className="mt-4 text-sm font-medium leading-snug text-ink">
                  {r}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

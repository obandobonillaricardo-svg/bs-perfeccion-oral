const SERVICES = [
  {
    n: "01",
    title: "Odontología preventiva",
    desc: "Controles regulares para detectar y prevenir caries, enfermedades de encías y otros problemas antes de que avancen.",
  },
  {
    n: "02",
    title: "Odontología restaurativa",
    desc: "Recuperamos la función del sistema estomatognático: oclusión, articulación temporomandibular y estructura dental.",
  },
  {
    n: "03",
    title: "Odontología estética",
    desc: "Diseño de sonrisa, carillas y blanqueamiento, donde la percepción de lo hermoso guía cada resultado.",
  },
  {
    n: "04",
    title: "Ortodoncia",
    desc: "Corrección de la posición dental con seguimiento continuo, para una mordida sana y una sonrisa alineada.",
  },
  {
    n: "05",
    title: "Rehabilitación oral",
    desc: "Tratamientos integrales para recuperar piezas dentales perdidas o dañadas con soluciones duraderas.",
  },
  {
    n: "06",
    title: "Cirugía maxilofacial",
    desc: "Procedimientos quirúrgicos especializados realizados con protocolos de bioseguridad certificados.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-cloud py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="reveal max-w-xl">
          <p className="eyebrow mb-4">Nuestros servicios</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
            Desde odontología hasta estética dental
          </h2>
          <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              className="reveal group bg-paper p-8 transition-colors hover:bg-ink"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="font-mono text-xs text-mist group-hover:text-aqua">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink group-hover:text-paper">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-steel group-hover:text-paper/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

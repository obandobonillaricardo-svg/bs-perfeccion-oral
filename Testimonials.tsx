const TESTIMONIALS = [
  {
    quote:
      "Antes le temía al odontólogo. Desde que me atiende el equipo de B&S recuperé la confianza para sonreír sin pena.",
    name: "Cristina C.",
    place: "Bogotá, Colombia",
  },
  {
    quote:
      "Me recomendaron la clínica para mi ortodoncia y diseño de sonrisa. Hasta hoy me siento feliz con los resultados.",
    name: "Osmar R.",
    place: "Bogotá, Colombia",
  },
  {
    quote:
      "Se tomaron el tiempo de explicarme cada paso del tratamiento. El equipo te hace sentir como en casa.",
    name: "Leidy M.",
    place: "Bogotá, Colombia",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="reveal max-w-xl">
          <p className="eyebrow mb-4">Testimonios</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
            Lo que dicen nuestros pacientes
          </h2>
          <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal rounded-2xl border border-ink/10 bg-cloud p-7"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <span className="font-display text-4xl italic text-mist">
                &ldquo;
              </span>
              <blockquote className="-mt-3 text-[0.98rem] leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-steel">{t.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

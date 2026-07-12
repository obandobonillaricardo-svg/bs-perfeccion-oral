const STEPS = [
  {
    n: "1",
    title: "Elige fecha y horario",
    desc: "Escríbenos por WhatsApp o llama directamente, sin costo adicional.",
  },
  {
    n: "2",
    title: "Confirmamos tu cita",
    desc: "Te confirmamos por llamada o mensaje y quedas agendado.",
  },
];

export default function Booking() {
  return (
    <section className="relative overflow-hidden bg-ink py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto_1fr]">
          <div className="reveal">
            <p className="eyebrow text-mist">Reserva desde tu móvil</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
              Agenda tu cita en dos pasos, sin salir de casa
            </h2>
            <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
          </div>

          <div className="hidden h-full w-px bg-paper/10 md:block" />

          <div className="reveal space-y-6" style={{ animationDelay: "120ms" }}>
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 font-mono text-sm text-aqua">
                  {s.n}
                </span>
                <div>
                  <p className="font-medium text-paper">{s.title}</p>
                  <p className="mt-1 text-sm text-paper/60">{s.desc}</p>
                </div>
              </div>
            ))}
            <a
              href="https://wa.me/573017782398"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-paper px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua focus-ring"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

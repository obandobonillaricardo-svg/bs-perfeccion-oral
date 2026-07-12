import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cloud">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 pb-20 pt-16 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-24">
        <div className="reveal">
          <p className="eyebrow mb-5">Clínica odontológica · Bogotá</p>
          <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-6xl">
            Una sonrisa bien
            <br />
            <span className="italic font-normal">diseñada</span> empieza por
            <br />
            una boca sana.
          </h1>
          <span className="smile-line smile-draw mt-6 block h-[3px] w-24 scale-x-0" />
          <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-steel">
            En B&amp;S Perfección Oral combinamos estética y funcionalidad
            para devolverte la confianza en tu sonrisa, con tratamientos
            indoloros, citas ágiles y un equipo que cuida cada detalle.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/573017782398"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-cobalt focus-ring"
            >
              Reserva tu cita por WhatsApp
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 focus-ring"
            >
              Ver servicios
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            <div>
              <dt className="font-display text-3xl text-ink">15+</dt>
              <dd className="mt-1 text-xs text-steel">Años de experiencia</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-ink">100%</dt>
              <dd className="mt-1 text-xs text-steel">Tratamientos indoloros</dd>
            </div>
            <div>
              <dt className="font-display text-3xl text-ink">2</dt>
              <dd className="mt-1 text-xs text-steel">Pasos para agendar</dd>
            </div>
          </dl>
        </div>

        <div className="reveal relative" style={{ animationDelay: "150ms" }}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(22,32,43,0.35)]">
            <Image
              src="/images/doctor-work.jpg"
              alt="Procedimiento odontológico realizado por el equipo de B&S Perfección Oral"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
          <div className="absolute -left-6 bottom-8 hidden w-44 rounded-2xl bg-paper p-4 shadow-[0_20px_45px_-20px_rgba(22,32,43,0.35)] sm:block">
            <p className="eyebrow text-[0.6rem]">Bioseguridad</p>
            <p className="mt-1 font-display text-sm text-ink">
              Protocolos certificados en cada procedimiento
            </p>
            <span className="smile-line mt-3 block h-[2px] w-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

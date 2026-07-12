import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="bg-paper py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div className="reveal relative order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[28px]">
            <Image
              src="/images/doctor-portrait.jpg"
              alt="Profesional de B&S Perfección Oral en consultorio"
              fill
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal order-1 md:order-2">
          <p className="eyebrow mb-4">Sobre nosotros</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
            Personal calificado, comprometido con tu bienestar
          </h2>
          <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
          <p className="mt-6 text-[1.05rem] leading-relaxed text-steel">
            Nuestro equipo está formado por odontólogos altamente
            capacitados, con amplia experiencia clínica y una vocación
            genuina por el detalle. Combinamos tecnología moderna con un
            trato cercano para que cada visita sea tranquila, precisa y
            efectiva.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Equipos y tecnología de diagnóstico de última generación",
              "Planes de tratamiento personalizados, sin procedimientos innecesarios",
              "Bioseguridad estricta en cada consultorio",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-aqua to-cobalt" />
                <span className="text-[0.98rem] text-ink/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

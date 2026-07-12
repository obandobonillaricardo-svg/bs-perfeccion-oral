import Image from "next/image";

const TEAM = [
  {
    name: "Dr. Andrés Barragán S.",
    role: "Odontólogo · Rehabilitación oral",
    img: "/images/doctor-work.jpg",
  },
  {
    name: "Vanessa",
    role: "Odontóloga",
    img: "/images/doctor-portrait.jpg",
  },
];

export default function Team() {
  return (
    <section id="equipo" className="bg-cloud py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="reveal max-w-xl">
          <p className="eyebrow mb-4">Nuestro equipo</p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
            Las manos detrás de cada sonrisa
          </h2>
          <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal relative overflow-hidden rounded-[28px]">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="/images/team-clinic.jpg"
                alt="Equipo de B&S Perfección Oral atendiendo a un paciente"
                fill
                sizes="(max-width: 1024px) 90vw, 620px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="reveal"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 45vw, 220px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 font-display text-base text-ink">
                  {member.name}
                </p>
                <p className="text-xs text-steel">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

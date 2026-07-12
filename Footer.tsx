import Image from "next/image";

const SERVICES = [
  "Odontología preventiva",
  "Odontología restaurativa",
  "Odontología estética",
  "Ortodoncia",
  "Rehabilitación oral",
  "Cirugía maxilofacial",
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-paper/70">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="B&S Perfección Oral"
                width={54}
                height={54}
                className="h-[54px] w-[54px] object-contain brightness-0 invert"
              />
              <span className="font-display text-lg text-paper">B&amp;S</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Odontología estética y funcional en Bogotá, con más de 15
              años de experiencia cuidando sonrisas.
            </p>
          </div>

          <div>
            <p className="eyebrow text-mist">Servicios</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#servicios" className="hover:text-paper focus-ring rounded-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mist">Navegación</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-paper focus-ring rounded-sm">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-paper focus-ring rounded-sm">Nosotros</a></li>
              <li><a href="#equipo" className="hover:text-paper focus-ring rounded-sm">Equipo</a></li>
              <li><a href="#contacto" className="hover:text-paper focus-ring rounded-sm">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-mist">Síguenos</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper focus-ring rounded-sm"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper focus-ring rounded-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573017782398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper focus-ring rounded-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-paper/10 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} B&amp;S Perfección Oral. Todos los derechos reservados.</p>
          <span className="smile-line block h-[2px] w-16" />
        </div>
      </div>
    </footer>
  );
}

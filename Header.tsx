import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-2.5">
        <Link href="#inicio" className="flex items-center gap-3 focus-ring rounded-sm">
          <Image
            src="/images/logo.png"
            alt="B&S Perfección Oral"
            width={60}
            height={60}
            priority
            className="h-[60px] w-[60px] object-contain"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-tight text-ink">B&amp;S</span>
            <span className="eyebrow mt-0.5 text-[0.62rem]">Perfección Oral</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-steel transition-colors hover:text-ink focus-ring rounded-sm"
            >
              {link.label}
              <span className="smile-line absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+573017782398"
            className="hidden text-sm font-semibold text-ink lg:block focus-ring rounded-sm"
          >
            +57 301 778 2398
          </a>
          <a
            href="https://wa.me/573017782398"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-cobalt focus-ring"
          >
            Reserva tu cita
          </a>
        </div>
      </div>
    </header>
  );
}

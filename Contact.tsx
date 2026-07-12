import ContactForm from "./ContactForm";

const DETAILS = [
  {
    label: "Teléfono",
    value: "+57 301 778 2398",
    href: "tel:+573017782398",
  },
  {
    label: "WhatsApp",
    value: "Escríbenos directamente",
    href: "https://wa.me/573017782398",
  },
  {
    label: "Correo",
    value: "hola@bsperfeccionoral.com",
    href: "mailto:hola@bsperfeccionoral.com",
  },
  {
    label: "Ubicación",
    value: "Bogotá D.C., Colombia",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="bg-cloud py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="reveal">
            <p className="eyebrow mb-4">Contacto</p>
            <h2 className="font-display text-4xl font-medium leading-tight text-ink sm:text-[2.75rem]">
              Programa tu cita virtual
            </h2>
            <span className="smile-line smile-draw mt-5 block h-[3px] w-20 scale-x-0" />
            <p className="mt-6 max-w-sm text-[1.02rem] leading-relaxed text-steel">
              Escríbenos y te confirmamos tu cita el mismo día. También
              puedes llamarnos o escribirnos directamente por WhatsApp.
            </p>

            <ul className="mt-10 space-y-6">
              {DETAILS.map((d) => (
                <li key={d.label} className="border-t border-ink/10 pt-4">
                  <p className="eyebrow text-[0.62rem]">{d.label}</p>
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      d.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-1 block text-base font-medium text-ink transition-colors hover:text-cobalt focus-ring rounded-sm"
                  >
                    {d.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal rounded-[28px] bg-paper p-8 sm:p-10"
            style={{ animationDelay: "100ms" }}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

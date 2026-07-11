# B&S Perfección Oral — sitio web

Sitio institucional para la clínica **B&S Perfección Oral**, construido con
**Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** y formulario de
contacto funcional con **Resend**. Pensado para desplegarse en **Vercel**.

## Características técnicas

- **Next.js 14 App Router** — rutas de servidor, componentes de servidor por
  defecto, componentes cliente solo donde hace falta (formulario, animaciones).
- **API Route** (`app/api/contact/route.ts`) que envía el formulario de
  contacto por correo usando **Resend**, con validación de campos, límite de
  longitud y **honeypot anti-spam**.
- **Tailwind CSS** con tokens de marca propios (colores, tipografías,
  animaciones) en `tailwind.config.ts`.
- **next/font** con auto-hosting de Fraunces, Manrope e IBM Plex Mono (sin
  layout shift, sin llamadas externas en tiempo de ejecución).
- **next/image** para todas las fotos, con optimización automática (AVIF /
  WebP, lazy loading, tamaños responsivos).
- **Metadata / SEO** (Open Graph, robots, títulos y descripciones) en
  `app/layout.tsx`.
- Animaciones de scroll con `IntersectionObserver`, respetando
  `prefers-reduced-motion`.
- 100% responsivo, accesible (foco visible, `aria-label`s, contraste AA).

## Estructura

```
app/
  layout.tsx          Fuentes, metadata global
  page.tsx             Ensambla todas las secciones
  globals.css          Estilos base + elemento de marca "smile-line"
  api/contact/route.ts Endpoint que envía correos con Resend
components/
  Header.tsx, Hero.tsx, About.tsx, Services.tsx, Booking.tsx,
  WhyUs.tsx, Team.tsx, Testimonials.tsx, Contact.tsx,
  ContactForm.tsx, Footer.tsx, ScrollReveal.tsx
public/images/
  logo.png, doctor-work.jpg, doctor-portrait.jpg, team-clinic.jpg
```

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completa tus claves (ver abajo)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Configurar Resend (formulario de contacto)

1. Crea una cuenta gratuita en [resend.com](https://resend.com).
2. En **API Keys**, genera una clave y cópiala.
3. (Recomendado) Verifica tu propio dominio en **Domains** dentro de Resend
   para poder enviar desde `notificaciones@tudominio.com`. Mientras
   verificas el dominio puedes usar `onboarding@resend.dev` como remitente
   de prueba.
4. Define las variables de entorno:

   | Variable            | Descripción                                              |
   |----------------------|----------------------------------------------------------|
   | `RESEND_API_KEY`     | Clave de API de Resend                                   |
   | `CONTACT_TO_EMAIL`   | Correo de la clínica que recibirá los mensajes            |
   | `CONTACT_FROM_EMAIL` | Remitente verificado, formato `Nombre <correo@dominio>`  |

## Desplegar en Vercel (con dominio gratis)

Al desplegar, Vercel asigna automáticamente y **sin costo** un dominio del
tipo `tu-proyecto.vercel.app` — no hace falta comprar nada ni configurar
DNS. Si más adelante quieres un dominio propio (por ejemplo
`bsperfeccionoral.com`), lo puedes conectar después desde la misma
configuración del proyecto, pero el subdominio `.vercel.app` ya es
público y funcional desde el primer despliegue.

1. Sube este proyecto a un repositorio de GitHub/GitLab/Bitbucket.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se requiere configuración
   adicional de build.
4. En **Settings → Environment Variables**, agrega las 3 variables de
   Resend descritas arriba (en Production y Preview).
5. Despliega. Vercel te entrega el enlace `tu-proyecto.vercel.app` al
   terminar (puedes personalizar ese nombre en **Settings → Domains** o
   al crear el proyecto).
6. En cada `git push` a la rama principal, Vercel vuelve a desplegar
   automáticamente.

Alternativa por CLI:

```bash
npm i -g vercel
vercel
vercel env add RESEND_API_KEY
vercel env add CONTACT_TO_EMAIL
vercel env add CONTACT_FROM_EMAIL
vercel --prod
```

## Antes de publicar — datos por completar

Estos datos son **de ejemplo** y deben reemplazarse por los reales de la
clínica antes de publicar el sitio:

- Número de teléfono / WhatsApp (`+57 300 123 4567`) en `Header.tsx`,
  `Hero.tsx`, `Booking.tsx`, `WhyUs.tsx`, `Contact.tsx`, `Footer.tsx`.
- Correo de contacto (`hola@bsperfeccionoral.com`) en `Contact.tsx` y
  `.env` (`CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL`).
- Dirección física de la clínica en `Contact.tsx`.
- Enlaces reales de Facebook / Instagram en `Footer.tsx`.
- Dominio real en `app/layout.tsx` (`metadataBase`).

## Licencia de imágenes

Las fotografías utilizadas fueron provistas por el cliente. Verifica que
tengas los derechos de uso antes de publicar el sitio en producción.

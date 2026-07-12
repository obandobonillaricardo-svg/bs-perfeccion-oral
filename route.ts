import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { name, email, phone, service, message, company } = body;

  // Honeypot: bots fill hidden fields, humans leave it blank.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { error: "Por favor completa todos los campos requeridos." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "El correo electrónico no es válido." },
      { status: 400 }
    );
  }

  if (message.length > 4000 || name.length > 200) {
    return NextResponse.json(
      { error: "El mensaje es demasiado largo." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Faltan variables de entorno: RESEND_API_KEY, CONTACT_TO_EMAIL o CONTACT_FROM_EMAIL"
    );
    return NextResponse.json(
      { error: "El servicio de correo no está configurado. Contáctanos por WhatsApp." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      reply_to: email,
      subject: `Nueva solicitud de cita — ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #16202B;">
          <h2 style="margin-bottom: 4px;">Nueva solicitud desde bsperfeccionoral.com</h2>
          <p style="color:#5B6B7C; margin-top:0;">Formulario de contacto</p>
          <table cellpadding="6" style="border-collapse: collapse;">
            <tr><td><strong>Nombre</strong></td><td>${escapeHtml(name)}</td></tr>
            <tr><td><strong>Correo</strong></td><td>${escapeHtml(email)}</td></tr>
            <tr><td><strong>Teléfono</strong></td><td>${escapeHtml(phone)}</td></tr>
            <tr><td><strong>Servicio</strong></td><td>${escapeHtml(service || "No especificado")}</td></tr>
          </table>
          <p style="margin-top:16px;"><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

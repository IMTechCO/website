import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { render } from "@react-email/render";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const html = await render(
        ContactEmail({
            name: body.name,
            email: body.email,
            company: body.company,
            message: body.message,
        })
    );

    await resend.emails.send({
        from: "IM Tech <onboarding@resend.dev>",
        to: "jhonmoreno0@gmail.com", // reemplázalo por tu correo
        subject: `Nuevo contacto de ${body.name}`,
        html,
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud recibida.",
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar la solicitud.",
      },
      { status: 500 }
    );

  }
}
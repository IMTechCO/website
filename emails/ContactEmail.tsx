import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  company,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto desde la página web de IM Tech</Preview>

      <Body
        style={{
          backgroundColor: "#f6f9fc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            margin: "40px auto",
            padding: "32px",
            borderRadius: "12px",
            maxWidth: "600px",
          }}
        >
          <Heading>Nuevo Lead</Heading>

          <Text>
            Se ha recibido una nueva solicitud desde la página web.
          </Text>

          <Hr />

          <Section>
            <Text><strong>Nombre</strong></Text>
            <Text>{name}</Text>

            <Text><strong>Correo</strong></Text>
            <Text>{email}</Text>

            <Text><strong>Empresa</strong></Text>
            <Text>{company || "No especificada"}</Text>

            <Text><strong>Mensaje</strong></Text>
            <Text>{message}</Text>
          </Section>

          <Hr />

          <Text
            style={{
              color: "#666",
              fontSize: "12px",
            }}
          >
            IM Tech • Formulario Web
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
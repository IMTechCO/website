export default function SectionBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2563eb 1px, transparent 1px),
            linear-gradient(to bottom, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow superior */}
      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      {/* Glow inferior */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
    </>
  );
}
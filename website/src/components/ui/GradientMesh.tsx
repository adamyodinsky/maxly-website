export default function GradientMesh() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Top-left electric blue radial */}
      <div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full animate-orb-float-slow will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(0, 28, 255, 0.15) 0%, transparent 70%)',
        }}
      />
      {/* Bottom-right cyan radial */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full animate-orb-float-reverse will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(0, 180, 216, 0.12) 0%, transparent 70%)',
        }}
      />
      {/* Center subtle warm radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 60%)',
        }}
      />
    </div>
  );
}

export function Header() {
  return (
    <header className="gallery-header">
      {/* Logo + título */}
      <div className="flex items-center gap-3">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="0" y="0" width="8" height="8" fill="white" opacity="0.9" />
          <rect x="10" y="0" width="8" height="8" fill="white" opacity="0.4" />
          <rect x="0" y="10" width="8" height="8" fill="white" opacity="0.4" />
          <rect
            x="10"
            y="10"
            width="8"
            height="8"
            fill="white"
            opacity="0.15"
          />
        </svg>

        <span className="gallery-header__title">Design Systems</span>

        <span className="gallery-header__badge">Gallery</span>
      </div>

      {/* Direita */}
      <div className="text-lg font-semibold">
        <span className="text-white">&lt;</span>
        <span className="text-white">J</span>
        <span className="text-white">/&gt;</span>
      </div>
    </header>
  );
}

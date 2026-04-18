import { useLocation } from "react-router-dom";

export function Header() {
  const { pathname } = useLocation();

  let badge: string | null = null;
  if (pathname.startsWith("/designsystem")) badge = "Design System";
  else if (pathname.startsWith("/components")) badge = "Components";

  return (
    <header className="gallery-header">
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

        <span className="gallery-header__title">Crafts</span>

        {badge && <span className="gallery-header__badge">{badge}</span>}
      </div>

      <div className="text-lg font-semibold">
        <span className="text-white">&lt;</span>
        <span className="text-white">J</span>
        <span className="text-white">/&gt;</span>
      </div>
    </header>
  );
}

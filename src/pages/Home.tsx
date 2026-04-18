import { useNavigate } from "react-router-dom";
import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="gallery-shell">
      <div className="gallery-grain" aria-hidden="true" />
      <Header />
      <main className="home-content">
        <div className="home-cards">
          <button className="home-nav-card" onClick={() => navigate("/designsystem")}>
            <span className="home-nav-card__title">Design System</span>
          </button>
          <button className="home-nav-card" onClick={() => navigate("/components")}>
            <span className="home-nav-card__title">Components</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

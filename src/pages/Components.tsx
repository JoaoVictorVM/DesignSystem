import { Header } from "../components/ui/Header";
import { Footer } from "../components/ui/Footer";

export default function Components() {
  return (
    <div className="gallery-shell">
      <div className="gallery-grain" aria-hidden="true" />
      <Header />
      <main className="gallery-content" />
      <Footer />
    </div>
  );
}

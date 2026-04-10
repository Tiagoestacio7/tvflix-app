import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function Layout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet /> {/* Aqui entra o conteúdo das rotas */}
      </main>

      <Footer />
    </div>
  );
}

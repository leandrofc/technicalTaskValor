import { Footer } from './Footer';
import { Header } from './Header';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div className="flex flex-col h-full bg-[#020204]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

import { Footer } from '../footer';
import { Navbar } from '../navbar';
import Watermark from '../watermark';

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Watermark />

      <Navbar />

      <div className="container mx-auto">
        <div className="align-middle flex flex-col flex-grow">{children}</div>
      </div>

      <Footer />
    </>
  );
}

export default Layout;

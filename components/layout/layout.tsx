import { Footer } from '../footer';
import { Navbar } from '../navbar';

export interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="align-middle flex flex-col flex-grow">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;

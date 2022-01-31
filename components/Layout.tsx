import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;

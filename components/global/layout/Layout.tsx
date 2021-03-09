import { ReactElement, ReactNode } from 'react';
import Header from '@/global/header/Header';

export default function Layout({ children } : {children: ReactNode}) {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
}

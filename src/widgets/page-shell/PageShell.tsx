import type { PropsWithChildren } from 'react';
import { Container } from '../../shared/ui/Container';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

export function PageShell({ children }: PropsWithChildren) {
  return <div className="page-shell"><Header /><main className="page-shell__main"><Container>{children}</Container></main><Footer /></div>;
}

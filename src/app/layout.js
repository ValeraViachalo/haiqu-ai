import './globals.scss';
import { siteConfig } from '../constants';
import { fraktionMono, neueMontreal, fraktionSemibold } from '../fonts';
import { Footer, Header } from '../ui';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="favicon.ico"
        sizes="any"
      />
      <body className={`${fraktionMono.variable} ${neueMontreal.variable} ${fraktionSemibold.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import styles from './globals.scss';
import { siteConfig } from '../constants';
import { fraktionMono, neueMontreal, fraktionSemibold } from '../fonts';
import { Footer, Header } from '../ui';
import { ScrollProvider } from '../context/scrollProvider';

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
      <body
        className={`${fraktionMono.variable} ${neueMontreal.variable} ${fraktionSemibold.variable}`}
      >
        <div className={styles.header_container}>
          <Header />
        </div>
        <ScrollProvider>{children}</ScrollProvider>
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}

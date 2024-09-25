import styles from './globals.scss';
import { siteConfig } from '../constants';
import { fraktionMono, neueMontreal, fraktionSemibold } from '../fonts';
import { Footer, Header } from '../ui';
import { ScrollProvider } from '../context/scrollProvider';

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

async function getHeadBot() {
    const res = await fetch(`https://app.haiqu.ai/wp-admin/admin-ajax.php?action=api&page=options`,{
        cache: "no-cache",
    })
    return res.json()
}

export default async function RootLayout({ children }) {
    const dataHB = await getHeadBot();

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
          <Header data={dataHB} />
        </div>
        <ScrollProvider>{children}</ScrollProvider>
        <Footer data={dataHB} />
      </body>
    </html>
  );
}

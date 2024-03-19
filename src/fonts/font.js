import localFont from 'next/font/local';

// export const fraktionMono = localFont({
//   src: './PPFraktionMono-Regular.otf',
//   display: 'swap',
//   variable: '--fraktion-font',
// });

export const fraktionMono = localFont({
  src: './PPFraktionSans-Regular.woff2',
  display: 'swap',
  variable: '--fraktion-font',
});

export const fraktionSemibold = localFont({
  src: './PPFraktionSans-Semibold.woff2',
  display: 'swap',
  variable: '--fraktion-font-semibold',
});

export const neueMontreal = localFont({
  src: './PPNeueMontreal-Book.otf',
  display: 'swap',
  variable: '--neue-montreal-font',
});

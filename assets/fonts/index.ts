import localFont from "next/font/local";
export const fontCaveat = localFont({
  src: "./caveat.woff2",
  variable: "--font-caveat",
});
export const fontDepartureMono = localFont({
  src: "./departure-mono.woff",
  variable: "--font-departureMono",
});
export const fontPpFragmentGlare = localFont({
  src: "./pp-fragment-glare-light.ttf",
  variable: "--font-ppFragmentGlare",
});
export const fontRobotoMono = localFont({
  src: "./robotoMono-regular.ttf",
  variable: "--font-robotoMono",
  weight: "400",
  style: "normal",
});

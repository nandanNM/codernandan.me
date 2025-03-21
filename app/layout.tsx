import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { fontCaveat, fontDepartureMono, fontRobotoMono } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Nandan Manna",
  description:
    "Software Engineer with 4 years of software engineering experience in startups and MNCs, currently building accounting software at IRIS. Specialized in sports tech, banking (AML), and tax solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased",
          fontRobotoMono.variable,
          fontCaveat.variable,
          fontDepartureMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
